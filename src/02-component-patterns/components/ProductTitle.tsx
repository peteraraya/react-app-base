import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// se recomienda utilizar esta forma cuando recibimos una sola propiedad caso contrario utilizar una interfaz
export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ? title : product.title}</span>
  )
}