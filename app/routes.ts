import {Route} from '@tinijs/router';

const routes: Route[] = [
  {
    path: '',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-home',
      },
      {
        path: '/docs/:slug?',
        component: 'page-docs',
        action: async () => {
          await import('../pages/docs');
        },
      },
      {
        path: '/modules/:name?',
        component: 'page-modules',
        action: async () => {
          await import('../pages/modules');
        },
      },
      {
        path: '/support',
        component: 'page-support',
        action: async () => {
          await import('../pages/support');
        },
      },
      {
        path: '/about',
        component: 'page-about',
        action: async () => {
          await import('../pages/about');
        },
      },
      {
        path: '/terms',
        component: 'page-terms',
        action: async () => {
          await import('../pages/terms');
        },
      },
      {
        path: '/privacy',
        component: 'page-privacy',
        action: async () => {
          await import('../pages/privacy');
        },
      },
      {
        path: '(.*)',
        component: 'page-404',
      },
    ],
  },
];

export default routes;
export type Routes = typeof routes;
