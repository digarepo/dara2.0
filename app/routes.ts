import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('components/layouts/MainLayout.tsx', [
    index('routes/home.tsx'),
    route('about', 'routes/about.tsx'),
    route('blog', 'routes/blog.tsx'),
    route('portfolio', 'routes/portfolio.tsx'),
  ]),
  layout('components/layouts/AdminLayout.tsx', [
    route('admin', 'routes/admin/dashboard.tsx'),
  ]),
] satisfies RouteConfig;
