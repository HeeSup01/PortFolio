# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is a **job-oriented one-page developer portfolio website**.

The goal is not just to make a personal introduction page, but to demonstrate that the owner can:

- design a service structure clearly
- build a real frontend application with React
- maintain readable and organized code
- deploy a working product through GitHub Pages
- communicate growth, engineering thinking, and project experience effectively

This project covers the full process:
**planning → design → implementation → deployment**

## Core Goal

The portfolio should communicate the following image of the developer:

- a developer who can structure information clearly
- a developer who can design and implement a real product
- a developer who values readability, trust, and maintainability
- a developer who keeps growing through projects and experience

## Product Direction

This is a **single-page scrolling portfolio** built for hiring purposes.

The site should feel:

- clear
- trustworthy
- structured
- minimal
- professional

Avoid flashy or overly decorative UI.
Prioritize readability, spacing, visual hierarchy, and content flow.

## Page Flow

The page is organized in the following order:

1. Hero
2. About
3. Tech Stack
4. Projects
5. Engineering Thinking
6. Experience
7. Growth
8. Contact

This order is intentional.

The overall narrative should naturally flow from:

**introduction → skills → projects → problem-solving mindset → experience → growth → contact**

Do not change this order unless explicitly requested.

## Tech Stack

- React 18
- TypeScript
- Vite
- GitHub Pages deployment
- gh-pages for publishing

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Build production output to dist/
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages