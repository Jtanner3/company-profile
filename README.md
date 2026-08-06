# Jason Taña Portfolio

Jason Taña Portfolio is an Angular application for presenting a full-stack developer portfolio, including landing content, developer details, technology logos, project highlights, and public image assets.

## Tech Stack

- Angular 21
- TypeScript
- SCSS
- npm

## Prerequisites

- Node.js compatible with Angular 21
- npm 10 or newer

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

Open `http://localhost:4200/` in your browser.

## Available Scripts

Run the app locally:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

## Project Structure

```text
public/        Static images, logos, and favicon
src/app/       Angular app components, routes, and styles
src/styles.scss Global styles
angular.json   Angular workspace configuration
```

## Build Output

Production builds are generated in `dist/`. The directory is ignored by git because it can be recreated with `npm run build`.
