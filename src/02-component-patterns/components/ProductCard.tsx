import { createContext, ReactElement, useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

// Contexto para el componente ProductCard

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductImage = ({ img = '' }) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;
  
  if (img) {
    imgToShow = img;

  } else if (product.img) {
    imgToShow = product.img;
    
  } else {
    imgToShow = noImage;
  }


  return (
    <img src={imgToShow} alt="Product" className={styles.productImg} />
  )
}
// se recomienda utilizar esta forma cuando recibimos una sola propiedad caso contrario utilizar una interfaz
export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ? title: product.title}</span>
  )
}

// interface ProductsButtonProps {
//   increaseBy: (value: number) => void;
//   counter: number;
// }

export const ProductButtons = () => {

  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>

      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>

      </div>
  )
}


export const ProductCard = ({ children, product }: Props) => {

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
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;