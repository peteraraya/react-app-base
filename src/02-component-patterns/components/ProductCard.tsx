import { createContext, CSSProperties, ReactElement } from 'react';

import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value? :number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

  // Custom Hooks
  const { counter, increaseBy } = useProduct( { onChange, product, value } );

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