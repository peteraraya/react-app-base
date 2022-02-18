
import { Props as ProductCardProps } from '../components/ProductCard';
import { ButtonsProps, ImageProps, TitleProps } from '../components';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

// Contexto para el componente ProductCard

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}


// Opcional ProductCardHOCProps : tendremos la ventaja que nos permite tener mayor control de las propiedades que le pasamos a ProductCard
export interface ProductCardHOCProps {
  ({ children, product, className }: ProductCardProps): JSX.Element,
  Buttons: ({className}: ButtonsProps) => JSX.Element,
  Image: ({ img, className }: ImageProps) => JSX.Element,
  Title: ({ title, className }: TitleProps) => JSX.Element,

}

export interface onChangeArgs {
  product: Product;
  count: number;
}

// se elige  interfaz porque son mas livianas 
export interface ProductInCart extends Product {
  count: number;
}