import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log('count : ', count);
    // No debemos hacer este tipo de mutaciones * ES UNA MALA PRACTICA
    // shoppingCart[product.id] = { ...product, count };

    setShoppingCart(oldShoppingCart => {

      // obtengo todo el objeto , en caso de ser nulo lo crea con el valor del producto y su  count en 0
      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Si el articulo no existe o la sumatoria es menor a 0
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest

    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  }

}





      // Solución más sencilla
      // if (count === 0) {
      //   // eliminación con destructuring
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   // console.log({toDelete});
      //   return {
      //     ...rest
      //   }
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: {
      //     ...product,
      //     count
      //   }
