# Július Retzer - Portfolio Website

A modern, responsive personal developer portfolio website built with Next.js and TailwindCSS. This website showcases skills, projects, and professional experience in an engaging and professional manner.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, minimalistic, and visually appealing design
- **Dark Mode Support**: Automatically adapts to user preferences
- **Optimized Performance**: Fast loading and smooth animations
- **SEO Friendly**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) (Utility-first CSS framework)
- **TypeScript**: Type-safe JavaScript
- **Deployment**: Ready for deployment on Vercel or any hosting platform

## Sections

- **Hero**: Brief introduction with a professional photo and tagline
- **About**: Short bio highlighting expertise and experience
- **Skills**: Visual representation of technical skills
- **Projects**: Featured projects with thumbnails, descriptions, and links
- **Experience**: Timeline of work experience and key contributions
- **Contact**: Contact form and links to social profiles

## Development

### Prerequisites

- Node.js (v18 or later)
- pnpm (v9 or later)

### Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Data Management

All CV/resume data is stored in `src/cv.json` following the [JSON Resume](https://jsonresume.org/) schema with some extensions. Update this file to modify the content of the website.

## License

MIT
