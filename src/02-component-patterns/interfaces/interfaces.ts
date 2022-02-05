import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

// Contexto para el componente ProductCard

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}


// Opcional ProductCardHOCProps : tendremos la ventaja que nos permite tener mayor control de las propiedades que le pasamos a ProductCard
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element,
  Image: ({ img }: { img?: string }) => JSX.Element,
  Buttons: () => JSX.Element

}