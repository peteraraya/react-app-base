import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: ImageProps) => {

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
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  )
}