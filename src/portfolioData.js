export const portfolioWorks = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'Brief description of your creative work, highlighting the medium, techniques, and story behind it.',
    category: 'Video Editing', // or 'Graphic Design', 'Animation', 'Photography', etc.
    thumbnail: '/portfolio/project1-thumb.jpg',
    media: {
      type: 'image', // 'image' or 'video'
      src: '/portfolio/project1.jpg',
    },
    year: '2024',
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'Another creative project showcasing your skills in digital media and storytelling.',
    category: 'Animation',
    thumbnail: '/portfolio/project2-thumb.jpg',
    media: {
      type: 'video',
      src: '/portfolio/project2.mp4',
      poster: '/portfolio/project2-thumb.jpg',
    },
    year: '2023',
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'Example project demonstrating your expertise in visual communication.',
    category: 'Graphic Design',
    thumbnail: '/portfolio/project3-thumb.jpg',
    media: {
      type: 'image',
      src: '/portfolio/project3.jpg',
    },
    year: '2024',
  },
  // Add more projects here after uploading your media files to /public/portfolio/
]
