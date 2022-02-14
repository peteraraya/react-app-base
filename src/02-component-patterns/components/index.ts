import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export type { ButtonsProps } from './ProductButtons';

export { ProductImage } from './ProductImage';
export type { ImageProps } from './ProductImage';

export { ProductTitle } from './ProductTitle';
export type { TitleProps } from './ProductTitle';




// Es un componente especial : Object.assign nos permite asignarle nuevas propiedades a un componente
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  // En este caso le asignamos una propiedad a ProductCard
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});


export default ProductCard;