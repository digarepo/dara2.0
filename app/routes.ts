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
    route('login', 'routes/login.tsx'),
  ]),
  layout('components/layouts/AdminLayout.tsx', [
    route('admin', 'routes/admin/dashboard.tsx'),
    route('admin/blogs', 'routes/admin/blogs.tsx'),
    route('admin/portfolio', 'routes/admin/portfolio.tsx'),
    route('admin/users', 'routes/admin/users.tsx'),
    route('admin/roles', 'routes/admin/roles.tsx'),
    route('admin/permissions', 'routes/admin/permissions.tsx'),
    route('admin/settings', 'routes/admin/settings.tsx'),
  ]),
] satisfies RouteConfig;
