import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';


// Es un componente especial : Object.assign nos permite asignarle nuevas propiedades a un componente
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  // En este caso le asignamos una propiedad a ProductCard
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});


export default ProductCard;