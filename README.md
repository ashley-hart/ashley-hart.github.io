# ashleybhart.com

Source for the personal academic website of Ashley B. Hart, built with
[Astro](https://astro.build) + TypeScript and plain CSS, and deployed to
GitHub Pages at <https://ashleybhart.com>.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321 (placeholders visible)
npm run build    # production build into dist/ (placeholders hidden)
npm run preview  # serve the production build locally
npm run check    # type-check content and components
```

Requires Node 22.12+.

## Where to edit things

| What | File |
| --- | --- |
| Name, title, email, social links, homepage interests, job-market callout | `src/site.config.ts` |
| Homepage intro text | `src/pages/index.astro` (hero section) |
| Long biography & research journey | `src/pages/about.astro` |
| Research projects | `src/data/projects.yaml` |
| Publications | `src/data/publications.yaml` (`selected: true` → shown on homepage) |
| Teaching, mentoring, outreach | `src/data/teaching.yaml` |
| Education / experience / awards (About + CV pages) | `src/data/education.yaml`, `experience.yaml`, `awards.yaml` |
| News items on homepage | `src/data/news.yaml` |
| CV-only lists (software projects, skills) | top of `src/pages/cv.astro` |
| CV PDF | replace `public/cv/ashley-hart-cv.pdf` (keep the name) |
| Photos | `src/assets/` (automatically resized and converted to AVIF/WebP) |
| Colors / typography | tokens at the top of `src/styles/global.css` |

### Placeholders

Any YAML entry with `placeholder: true` (and the placeholder cards on the
Research and Teaching pages) appears with a dashed orange outline in
`npm run dev`, and is **left out of the production build**. Replace the text
with real information and delete the `placeholder: true` line to publish it.

Current placeholders to fill in:

- Teaching experience (courses, guest lectures) in `src/data/teaching.yaml`
- Teaching philosophy (`src/pages/teaching.astro`)
- Research statement summary (`src/pages/research.astro`)
- Upcoming/in-progress paper in `src/data/publications.yaml`
- A recent news item in `src/data/news.yaml`
- Google Scholar and ORCID URLs in `src/site.config.ts` (hidden while empty)

## Blog

Add a Markdown file to `src/content/blog/` (copy `_post-template.md` and drop the
leading underscore). Files starting with `_` are never published, and posts with
`draft: true` only show in dev. Posts appear in the blog index, on the
homepage, and in the RSS feed at `/rss.xml`.

## Games

Each game is a Markdown file in `src/content/games/` (see `_game-template.md`).
To make one playable in the browser:

1. **Godot 4:** Project → Export → *Web*. Turn **Thread Support off**
   (GitHub Pages cannot send the cross-origin-isolation headers that threaded
   builds need). Export to `public/play/<game-name>/index.html`.
   **Pygame:** build with [pygbag](https://pypi.org/project/pygbag/) and copy the
   generated `build/web/` folder to `public/play/<game-name>/`.
2. In the game's Markdown file set `status: playable` and
   `embed: /play/<game-name>/index.html`.

The game loads only after the visitor clicks **Play**, so it doesn't slow the
page down. Keep individual files under GitHub's 100 MB limit.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `master`.
One-time setup: in the GitHub repo go to **Settings → Pages → Build and
deployment → Source** and choose **GitHub Actions**. The custom domain is kept
via `public/CNAME`.
