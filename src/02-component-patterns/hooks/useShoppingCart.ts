import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {


      // Solución más sencilla
    setShoppingCart(oldShoppingCart => {

      console.log({ count });
      if (count === 0) {
        // eliminación con destructuring
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        // console.log({toDelete});
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product,count }
      }
    })
    
  }

  return {
    shoppingCart,
    onProductCountChange,
  }

}






