# Performance Optimization

## 1. Bundle Analysis

- Run `npm run build` to check bundle size
- Use `vite build --analyze` to visualize bundle composition

## 2. Code Splitting

- [x] Routes are split by default with React Router v7
- [x] Vendor chunks separated using `manualChunks` in `vite.config.ts`
- [ ] Lazy load admin routes

## 3. Caching

- [ ] Add cache headers for static assets
- [ ] Use browser caching for images

## 4. Database

- [ ] Add indexes to frequently queried columns (e.g., `users.email`, `blogs.slug`)

## 5. Image Optimization

- [ ] Use WebP format for images
- [ ] Lazy load images below the fold
- [ ] Use responsive images with `srcset`

## 6. Server

- [ ] Enable gzip/brotli compression
- [ ] Use a CDN for static assets in production

## 7. Metrics

- [ ] Measure Lighthouse score before and after optimization
- [ ] Track Time to First Byte (TTFB) and First Contentful Paint (FCP)

## Changes Implemented

- Added `manualChunks` in `vite.config.ts` to separate vendor code (React, React Router) from application code.
- Configured HMR port to avoid conflicts.
