// Helper function to get the correct base path
const getAssetPath = (path) => {
  // In production (GitHub Pages), BASE_URL will be '/hello/'
  // In development, it will be '/'
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};

export const portfolioWorks = [
  {
    id: 1,
    title: 'BUE Film Festival Poster Banner',
    description: 'Official poster design for the British University in Egypt International Student Film Festival, featuring bold typography and cinematic imagery.',
    category: 'Poster Design',
    thumbnail: getAssetPath('portfolio/bue poster banner.png'),
    media: {
      type: 'image',
      src: getAssetPath('portfolio/bue poster banner.png'),
    },
    year: '2024',
  },
  {
    id: 2,
    title: 'BUE ISFF Logo',
    description: 'Brand identity design for the International Student Film Festival, combining film reel motifs with modern minimalism.',
    category: 'Logo Design',
    thumbnail: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
    media: {
      type: 'image',
      src: getAssetPath('portfolio/BUEISFF LOGO PNG.png'),
    },
    year: '2024',
  },
  {
    id: 3,
    title: 'Film Festival Billboard',
    description: 'Large-scale billboard design for campus-wide festival promotion with high-impact visual hierarchy.',
    category: 'Billboard Design',
    thumbnail: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
    media: {
      type: 'image',
      src: getAssetPath('portfolio/POSTER COMPRESSED.jpg'),
    },
    year: '2024',
  },
  {
    id: 4,
    title: 'Book Cover Design',
    description: 'Editorial design project featuring typography exploration and narrative-driven composition.',
    category: 'Book Design',
    thumbnail: getAssetPath('portfolio/Book Cover final submission.png'),
    media: {
      type: 'image',
      src: getAssetPath('portfolio/Book Cover final submission.png'),
    },
    year: '2024',
  },
]

// Note: Portfolio showcases design work for the BUE International Student Film Festival
// Large source files (PSDs, videos) are excluded to stay within GitHub's file size limits
// To add videos, upload to YouTube and use embedded links or host on a CDN
