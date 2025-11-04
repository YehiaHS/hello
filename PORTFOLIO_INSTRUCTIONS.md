# Instructions for Adding Your Portfolio Works

This portfolio includes a dedicated works page with a carousel to showcase your creative projects. Since I cannot access Google Drive directly, please follow these steps to add your media:

## Step 1: Download Your Media from Google Drive
1. Access your Google Drive folder: https://drive.google.com/drive/folders/14vmYHUd50dgbc9tbpe0EvFNfBioJDpsg
2. Download all the images and videos you want to showcase
3. Rename files to be web-friendly (lowercase, no spaces): e.g., `project-1.jpg`, `film-festival-winner.mp4`

## Step 2: Add Media to the Project
1. Place all downloaded files in: `/public/portfolio/`
2. For each video, create a thumbnail image (a still frame from the video)
3. Recommended formats:
   - Images: `.jpg` or `.png` (optimize for web, aim for under 500KB)
   - Videos: `.mp4` (H.264 codec for best browser support)

## Step 3: Update Portfolio Data
Edit `src/portfolioData.js` and replace the example entries with your actual work:

```javascript
export const portfolioWorks = [
  {
    id: 1,
    title: 'Cairo Mobile Film Festival Winner',
    description: 'Award-winning short film showcasing narrative storytelling and cinematography.',
    category: 'Film',
    thumbnail: '/portfolio/cairo-film-thumb.jpg',
    media: {
      type: 'video',
      src: '/portfolio/cairo-film.mp4',
      poster: '/portfolio/cairo-film-thumb.jpg',
    },
    year: '2016',
  },
  // Add more entries following the same structure
]
```

## Step 4: Test Locally
Run `npm run dev` and navigate to `/portfolio` to preview your work.

## Step 5: Deploy
Once satisfied:
```bash
git add .
git commit -m "feat: add portfolio works"
git push
```

The GitHub Actions workflow will automatically deploy your updated portfolio.

## Tips
- Use descriptive titles and categories (Video Editing, Animation, Graphic Design, etc.)
- Keep descriptions concise but engaging (2-3 sentences)
- Ensure video thumbnails are representative still frames
- Test all media loads correctly before deploying
