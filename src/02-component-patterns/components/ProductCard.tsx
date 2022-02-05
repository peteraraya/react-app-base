import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

  // Custom Hooks
  const { counter, increaseBy } = useProduct();

  // console.log(styles);
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
    <div className={styles.productCard}>

      { children }

      {/* 
        <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> 
      */}

      </div>
    </Provider>
  );
};

// Asignamos propiedades
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;