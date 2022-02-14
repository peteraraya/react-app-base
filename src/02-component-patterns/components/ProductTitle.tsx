import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface TitleProps {
  activeClass?: string;
  className?: string;
  title?: string;
  style?: CSSProperties;
}

// se recomienda utilizar esta forma cuando recibimos una sola propiedad caso contrario utilizar una interfaz
// export const ProductTitle = ({ title }: { title?: string }) => {
export const ProductTitle = ({ title, className, style }: TitleProps) => {

  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  )
}