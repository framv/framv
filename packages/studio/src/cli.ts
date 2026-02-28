#!/usr/bin/env node
import { parseArgs } from "util";
import express from "express";
import { resolve, relative } from "path";
import open from "open";
import fs from "fs";

const { positionals, values } = parseArgs({
    args: process.argv.slice(2),
    options: {
        port: { type: "string", short: "p", default: "3000" },
    },
    allowPositionals: true,
});

const targetDir = process.cwd();
const targetFile = positionals[0];

let initialSrc = "";

if (targetFile) {
    // If it's an http/https URL, just use it
    if (targetFile.startsWith("http://") || targetFile.startsWith("https://")) {
        initialSrc = targetFile;
    } else {
        const absolutePath = resolve(targetFile);
        if (!fs.existsSync(absolutePath)) {
            console.warn(`Warning: Initial file not found: ${absolutePath}`);
        } else {
            initialSrc = "/" + relative(targetDir, absolutePath).replace(/\\/g, "/");
        }
    }
}

const app = express();
const port = parseInt(values.port as string, 10);

app.use(express.static(targetDir));

app.get("/", (req, res) => {
    // Allow passing ?url= querystring to override initial source
    const dynamicUrl = (req.query.url as string) || initialSrc;

    res.send(`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Framv Studio</title>
    <style>
        body, html { margin: 0; padding: 0; height: 100vh; overflow: hidden; display: flex; font-family: system-ui, sans-serif; }
        #sidebar { width: 320px; background: #1a1a1a; color: white; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; overflow-y: auto; border-right: 1px solid #333; }
        #sidebar h1 { font-size: 1.2rem; border-bottom: 1px solid #333; padding-bottom: 10px; margin-top: 0; display: flex; align-items: center; gap: 8px; }
        #sidebar h1 svg { width: 20px; height: 20px; color: #4caf50; }
        
        .url-bar { display: flex; gap: 8px; margin-bottom: 20px; }
        .url-bar input { flex: 1; padding: 6px; border-radius: 4px; border: 1px solid #444; background: #2a2a2a; color: white; font-size: 0.85rem; }
        .url-bar button { padding: 6px 12px; margin: 0; }
        
        .file-info { font-size: 0.85rem; color: #888; margin-bottom: 20px; word-break: break-all; }
        #content { flex: 1; border: none; background: #f0f0f0; display: block; }
        
        .element-card { background: #2a2a2a; border-radius: 8px; padding: 15px; margin-bottom: 15px; border: 1px solid #333; }
        .element-card h3 { margin: 0 0 10px 0; font-size: 0.95rem; color: #ddd; font-family: monospace; }
        
        button { background: #333; color: white; border: 1px solid #444; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; margin-right: 5px; margin-bottom: 5px; transition: all 0.2s; }
        button:hover { background: #444; border-color: #666; }
        button.primary { background: #4caf50; border-color: #45a049; }
        button.primary:hover { background: #45a049; }
        button.outline { background: transparent; color: #4caf50; border-color: #4caf50; }
        button.outline:hover { background: rgba(76, 175, 80, 0.1); }
        
        .empty-state { flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column; color: #666; font-size: 0.9rem; text-align: center; padding: 20px; }
    </style>
</head>
<body>
    <div id="sidebar">
        <h1>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2" ry="2"/></svg>
            Framv Studio
        </h1>
        
        <form class="url-bar" id="load-form">
            <input type="text" id="url-input" placeholder="URL or relative path..." value="${dynamicUrl}">
            <button type="submit" class="primary">Load</button>
        </form>

        <div id="elements-list">
            <p style="color: #666; font-size: 0.9rem;">Waiting for iframe load...</p>
        </div>
    </div>
    <div id="content-container" style="flex: 1; display: flex; flex-direction: column; background: #f0f0f0;">
        " + (dynamicUrl
            ? '<iframe id="content" src="' + dynamicUrl + '" style="flex: 1; border: none; width: 100%; height: 100%;"></iframe>'
            : '<div id="content" class="empty-state">' +
                 '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 48px; height: 48px; margin-bottom: 16px; color: #ccc;">' +
                     '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>' +
                     '<circle cx="8.5" cy="8.5" r="1.5"/>' +
                     '<polyline points="21 15 16 10 5 21"/>' +
                 '</svg>' +
                 '<p>Enter a URL or local file path in the sidebar to begin.</p>' +
                 '<p style="font-size: 0.8rem; opacity: 0.7;">Serving from:<br><code>' + targetDir + '</code></p>' +
               '</div>'
        ) + "
    </div>

    <script type="module">
        const loadForm = document.getElementById("load-form");
        const urlInput = document.getElementById("url-input");
        
        loadForm.onsubmit = (e) => {
            e.preventDefault();
            const targetUrl = urlInput.value.trim();
            if (targetUrl) {
                // Update URL to make it shareable/bookmarkable
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('url', targetUrl);
                window.history.pushState({}, '', newUrl);
                
                // Replace content container with iframe if it's currently empty state
                let iframe = document.getElementById("content");
                if (iframe.tagName.toLowerCase() !== 'iframe') {
                    const container = document.getElementById("content-container");
                    container.innerHTML = '<iframe id="content" src="' + targetUrl + '" style="flex: 1; border: none; width: 100%; height: 100%;"></iframe>';
                    iframe = document.getElementById("content");
                    bindIframeLoad(iframe);
                } else {
                    iframe.src = targetUrl;
                }
            }
        };

        function bindIframeLoad(iframe) {
            const list = document.getElementById("elements-list");
            list.innerHTML = "<p style='color: #666; font-size: 0.9rem;'>Scanning document...</p>";

            iframe.onload = () => {
                let doc;
                try {
                    doc = iframe.contentDocument || iframe.contentWindow.document;
                } catch(e) {
                    list.innerHTML = "<p style='color: #ff9800; font-size: 0.9rem;'>Cross-origin document loaded. Cannot scan for Framv elements.</p>";
                    return;
                }
                
                if (!doc) return;

                const elements = doc.querySelectorAll('framv-video, framv-slides, framv-sheets, framv-docs');
                
                if (elements.length === 0) {
                    list.innerHTML = "<p style='color: #ff9800; font-size: 0.9rem;'>No &lt;framv-*&gt; elements found in this document.</p>";
                    return;
                }

                list.innerHTML = "<div style='margin-bottom: 15px; font-size: 0.85rem; color: #4caf50;'>Detected " + elements.length + " element(s)</div>";
                
                elements.forEach((el, index) => {
                    const tag = el.tagName.toLowerCase();
                    const card = document.createElement("div");
                    card.className = "element-card";
                    
                    let title = "&lt;" + tag + "&gt;";
                    if (el.id) title += " <span style='color: #4caf50'>#" + el.id + "</span>";
                    
                    card.innerHTML = "<h3>" + title + "</h3>";
                    
                    // Play controls for temporal media
                    if (tag === 'framv-video' || tag === 'framv-slides') {
                        const playBtn = document.createElement("button");
                        playBtn.className = "primary";
                        playBtn.innerText = "Play";
                        playBtn.onclick = () => {
                            if (el.player && typeof el.player.play === 'function') {
                                el.player.play();
                            } else if (typeof el.play === 'function') {
                                el.play();
                            } else {
                                console.log("No internal player exposed yet.");
                            }
                        };
                        card.appendChild(playBtn);

                        const pauseBtn = document.createElement("button");
                        pauseBtn.innerText = "Pause";
                        pauseBtn.onclick = () => {
                            if (el.player && typeof el.player.pause === 'function') {
                                el.player.pause();
                            } else if (typeof el.pause === 'function') {
                                el.pause();
                            }
                        };
                        card.appendChild(pauseBtn);
                    }

                    // Export buttons
                    const row = document.createElement("div");
                    row.style.marginTop = "10px";
                    row.style.borderTop = "1px solid #333";
                    row.style.paddingTop = "10px";
                    
                    let formats = ['png', 'svg', 'pdf'];
                    if (tag === 'framv-video') formats.push('mp4');
                    
                    formats.forEach(fmt => {
                        const btn = document.createElement("button");
                        btn.className = "outline";
                        btn.innerText = "Export " + fmt.toUpperCase();
                        btn.onclick = async () => {
                            try {
                                const win = iframe.contentWindow;
                                if (!win.__framvCore) {
                                    alert("Window.__framvCore not exposed in your file. Ensure @framv/core is bundled and exported to window.");
                                    return;
                                }
                                
                                btn.innerText = "Processing...";
                                const blob = await win.__framvCore.exportElement(el, { format: fmt });
                                
                                // Download it
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.href = url;
                                a.download = "export_" + Date.now() + "." + fmt;
                                a.click();
                                
                                btn.innerText = "Export " + fmt.toUpperCase();
                            } catch(e) {
                                console.error(e);
                                alert("Export failed: " + e.message);
                                btn.innerText = "Export " + fmt.toUpperCase();
                            }
                        };
                        row.appendChild(btn);
                    });
                    
                    card.appendChild(row);
                    list.appendChild(card);
                });
            };
        }

        const existingIframe = document.getElementById("content");
        if (existingIframe && existingIframe.tagName.toLowerCase() === "iframe") {
            bindIframeLoad(existingIframe);
        } else {
            const list = document.getElementById("elements-list");
            list.innerHTML = "";
        }
    </script>
</body>
</html>`);
});

app.listen(port, () => {
    const url = "http://localhost:" + port;
    console.log("\\n🎬 Framv Studio Local Environment");
    console.log("📡 Serving Root: " + targetDir);
    if (initialSrc) {
        console.log("🚀 Default Src:  " + initialSrc);
        open(url + "?url=" + encodeURIComponent(initialSrc));
    } else {
        console.log("🚀 Access:       " + url + "\\n");
        open(url);
    }
});
