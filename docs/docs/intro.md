---
sidebar_position: 1
slug: /
---

# Introduction

**Framv** is a high-level video generation framework powered by Remotion. It bridges the gap between data and video rendering.

## Core Concepts

Framv is built around the idea of **Data-Driven Video**. Instead of manually editing timelines, you define data schemas and templates.

- **Templates**: React components that define the visual layout.
- **Sequences**: Time-based ordering of templates.
- **Render**: The engine that outputs MP4/WebM.

## Why Framv?

- **Reusability**: Build a library of branded video components.
- **Automation**: Generate thousands of personalized videos from a CSV.
- **Cloud Rendering**: Deploy to AWS Lambda for massive scale.

## Architecture

![Architecture](https://via.placeholder.com/800x400?text=Framv+Architecture)

Framv orchestrates Remotion instances and manages the asset pipeline, ensuring that every frame is rendered perfectly.
