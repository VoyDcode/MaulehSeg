import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { paths } from './paths'

export default [
  index('routes/home.tsx'),
  route(paths.about, 'routes/about.tsx'),
  route(paths.services, 'routes/services.tsx'),
  route(paths.trainings, 'routes/trainings.tsx'),
  route(paths.consulting, 'routes/consulting.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig
