import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('about', 'routes/about.tsx'),
    route('post', 'routes/blogpost.tsx')
] satisfies RouteConfig;
