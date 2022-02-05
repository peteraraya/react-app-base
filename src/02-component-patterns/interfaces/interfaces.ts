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
