import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0  } : useProductArgs ) => {
  
  const [counter, setCounter] = useState(value);

  // evaluamos si nuestro componente esta siendo evaluado por una función
  // utilizamos un useRef para evitar redibujar denuevo los componentes en caso de que cambie 

  // verificamos si el componente esta siendo evaluado por una función con true o false
  const isControlled = useRef(!!onChange);

  console.log('isControlled : ', isControlled.current);


  const increaseBy = (value: number) => {

    if (isControlled.current) {
      // este ! es para decirle a ts que siempre vas a tener el valor
      return onChange!({ count: value, product });
    }


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


