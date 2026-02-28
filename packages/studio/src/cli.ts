#!/usr/bin/env node
import { parseArgs } from "util";
import express from "express";
import { resolve, dirname, basename } from "path";
import open from "open";
import fs from "fs";

const { positionals, values } = parseArgs({
    args: process.argv.slice(2),
    options: {
        port: { type: "string", short: "p", default: "3000" },
    },
    allowPositionals: true,
});

const targetFile = positionals[0];

if (!targetFile) {
    console.error("Usage: framv-studio <file.html>");
    console.error("Example: framv-studio ./slides/intro/index.html");
    process.exit(1);
}

const absolutePath = resolve(targetFile);
if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
}

const targetDir = dirname(absolutePath);
const targetFilename = basename(absolutePath);

const app = express();
const port = parseInt(values.port as string, 10);

app.use(express.static(targetDir));

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Framv Studio | ${targetFilename}</title>
    <style>
        body, html { margin: 0; padding: 0; height: 100vh; overflow: hidden; display: flex; font-family: system-ui, sans-serif; }
        #sidebar { width: 320px; background: #1a1a1a; color: white; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; overflow-y: auto; border-right: 1px solid #333; }
        #sidebar h1 { font-size: 1.2rem; border-bottom: 1px solid #333; padding-bottom: 10px; margin-top: 0; display: flex; align-items: center; gap: 8px; }
        #sidebar h1 svg { width: 20px; height: 20px; color: #4caf50; }
        .file-info { font-size: 0.85rem; color: #888; margin-bottom: 20px; word-break: break-all; }
        #content { flex: 1; border: none; background: #f0f0f0; }
        
        .element-card { background: #2a2a2a; border-radius: 8px; padding: 15px; margin-bottom: 15px; border: 1px solid #333; }
        .element-card h3 { margin: 0 0 10px 0; font-size: 0.95rem; color: #ddd; font-family: monospace; }
        
        button { background: #333; color: white; border: 1px solid #444; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; margin-right: 5px; margin-bottom: 5px; transition: all 0.2s; }
        button:hover { background: #444; border-color: #666; }
        button.primary { background: #4caf50; border-color: #45a049; }
        button.primary:hover { background: #45a049; }
        button.outline { background: transparent; color: #4caf50; border-color: #4caf50; }
        button.outline:hover { background: rgba(76, 175, 80, 0.1); }
    </style>
</head>
<body>
    <div id="sidebar">
        <h1>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2" ry="2"/></svg>
            Framv Studio
        </h1>
        <div class="file-info">${targetFilename}</div>
        <div id="elements-list">
            <p style="color: #666; font-size: 0.9rem;">Waiting for iframe load...</p>
        </div>
    </div>
    <iframe id="content" src="/${targetFilename}"></iframe>

    <script type="module">
        const iframe = document.getElementById("content");
        const list = document.getElementById("elements-list");

        iframe.onload = () => {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const elements = doc.querySelectorAll('framv-video, framv-slides, framv-sheets, framv-docs');
            
            if (elements.length === 0) {
                list.innerHTML = "<p style='color: #ff9800; font-size: 0.9rem;'>No <framv-*> elements found in this document.</p>";
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
    </script>
</body>
</html>`);
});

app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`\n🎬 Framv Studio Local Environment`);
    console.log(`📡 Serving: ${targetDir}`);
    console.log(`🚀 Access:  ${url}\n`);
    open(url);
});
