import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { paths } from './paths'

export default [
  index('routes/home.tsx'),
  route(paths.about, 'routes/about.tsx'),
  route(paths.services, 'routes/services.tsx'),
  route(`${paths.services}/:slug`, 'routes/service-detail.tsx'),
  route(paths.trainings, 'routes/trainings.tsx'),
  route(`${paths.trainings}/:slug`, 'routes/training-detail.tsx'),
  route(paths.consulting, 'routes/consulting.tsx'),
  route(`${paths.consulting}/:slug`, 'routes/consulting-detail.tsx'),
  route(paths.contact, 'routes/contact.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig
