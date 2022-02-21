import { createContext, CSSProperties, ReactElement } from 'react';

import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
 // children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
  children: ( args : ProductCardHandlers ) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  // Custom Hooks
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues } );

  // console.log(styles);
  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <div
        className={` ${styles.productCard} ${className} `}
        style={style}
      >
      {/* agregamos () para que se ejecute la children como función y esto nos permite enviar argumentos */}
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
          
      }) } 

      </div>
    </Provider>
  );
};

// Asignamos propiedades
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;