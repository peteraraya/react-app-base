import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-Lazyload/pages/NoLazy';

 type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | JSXComponent,
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-Lazyload/layout/LazyLayout')),
    name: 'LazyLoading Nested'
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No LazyLoading'
  },
 
]