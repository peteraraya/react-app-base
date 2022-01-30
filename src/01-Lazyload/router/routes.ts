import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

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

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../pages/LazyPage3'));

// webpackChunkName : nos permite cambiar los nombres a los archivos chunks


// Definimos las rutas
export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3'
  },
]
