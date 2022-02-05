import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { ReactElement } from 'react';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]; // para enviar uno o mas elementos de react
}

interface Product {
  id: string;
  title: string;
  img?: string;
}


export const ProductImage = ({ img = '' }) => {
  return (
    <img src={img ? img : noImage} alt="Product" className={styles.productImg} />
  )
}
// se recomienda utilizar esta forma cuando recibimos una sola propiedad caso contrario utilizar una interfaz
export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <span className={styles.productDescription}>{title}</span>
  )
}

interface ProductsButtonProps {
  increaseBy: (value: number) => void;
  counter: number;
}

export const ProductButtons = ({ increaseBy, counter }: ProductsButtonProps) => {

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
    <div className={styles.productCard}>

      { children }

      {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons increaseBy={increaseBy} counter={counter} /> */}

    </div>
  );
};
