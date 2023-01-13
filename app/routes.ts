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
        path: '(.*)',
        component: 'page-404',
      },
    ],
  },
];

export default routes;
export type Routes = typeof routes;
