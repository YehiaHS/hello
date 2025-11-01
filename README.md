# Yehia Salem · Neobrutalist Portfolio

A bold single-page portfolio celebrating Yehia Hatem Salah Salem’s creative and technical journey across Integrated Marketing Communication and Computer Science. Built with Vite + React and styled using Tailwind CSS with a neobrutalist aesthetic.

## Tech Stack
- Vite + React 18
- Tailwind CSS 3
- Custom Tailwind theme extensions for brutalist shadows, color palette, and typography

## Getting Started
Install dependencies (already done if you followed the scaffolding steps):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure Highlights
- `src/data.js` centralizes all profile content (skills, awards, education, contact)
- `src/App.jsx` composes the hero and section components with neobrutalist styling
- `tailwind.config.js` defines the custom palette, typography, and brutal shadows

## Deploying to GitHub Pages
1. Create a GitHub repository and push this project (default branch assumed to be `main`).
2. GitHub Pages requires a base path when the site is served from a project repository. The workflow sets this automatically by populating `BASE_PATH` before building.
3. Review `.github/workflows/deploy.yml` and adjust the branch name if your default branch differs.
4. Enable GitHub Pages in the repository settings by choosing the “GitHub Actions” source once the first deployment succeeds.
5. Every push to `main` (or manual workflow dispatch) will rebuild and deploy the latest portfolio to the `github-pages` environment.

## Customization
Update `src/data.js` to adjust copy, contact details, or add new accolades. Tailwind utility classes in `src/App.jsx` can be tweaked to experiment with alternate color accents or layouts.

## License
This site is crafted specifically for Yehia Hatem Salah Salem. Reuse is permitted with attribution.
