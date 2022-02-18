import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0  } : useProductArgs ) => {
  
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {

    // Creamos una variables que mantenga el nuevo valor
    const newValue = Math.max(counter + value, 0)

    // almacena el valor previo y le suma el valor entrante, devolverá  el valor mayor 
    // setCounter(prev => Math.max(prev + value, 0));
    setCounter(newValue);

    // solución elegante de evitar un valor undefined
    onChange && onChange({ count: newValue, product });
  }

  useEffect(() => {
    setCounter(value);
  }, [value])
  


  return {
    counter,
    increaseBy
  };
};


