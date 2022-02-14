import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
  className?: string;
  product: Product;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

  // Custom Hooks
  const { counter, increaseBy } = useProduct();

  // console.log(styles);
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={` ${styles.productCard} ${className} `}
        style={style}
      >

      { children }

      </div>
    </Provider>
  );
};

// Asignamos propiedades
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;