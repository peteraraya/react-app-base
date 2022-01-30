import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-Lazyload/pages/NoLazy';


// Generamos un nuevo tipo personalizado para que el tipo Component pueda recibir un Compoenente Lazy o un compoenente JSX.Element
type JSXComponent = () => JSX.Element;

// Definimos tipos de datos para las rutas
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// Implementación de LazyLoad - debemos exportar los componentes por defecto

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-Lazyload/layout/LazyLayout'));

// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../pages/LazyPage3'));

// webpackChunkName : nos permite cambiar los nombres a los archivos chunks


// Definimos las rutas
export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy Layout - Dashboard',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },

]
