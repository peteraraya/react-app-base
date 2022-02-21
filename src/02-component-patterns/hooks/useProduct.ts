import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  console.log(initialValues?.count);

  // utilizamos useRef para no tener que pasarle el valor inicial a la funcion useEffect
  const isMounted = useRef(false);


  const increaseBy = (value: number) => {

    // Creamos una variables que mantenga el nuevo valor
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      // va tomar el minimo de los dos, para poder hacer que nuestro numero maximo funcione ni baje del 0
      newValue = Math.min(newValue, initialValues.maxCount);
    }



    // almacena el valor previo y le suma el valor entrante, devolverá  el valor mayor 
    // setCounter(prev => Math.max(prev + value, 0));
    setCounter(newValue);

    // solución elegante de evitar un valor undefined
    onChange && onChange({ count: newValue, product });
  }


  useEffect(() => {

    // si no esta montado el componente, no hacemos nada, Para evitar que se ejecute dos veces 
    if (!isMounted.current) return;

    setCounter(value);

  }, [value]);


  const reset = () => {
    setCounter(initialValues?.count || value);
  }


  // Este efecto estará evalauando el isMounted * Debe ir al ultimo *
  useEffect(() => {
    isMounted.current = true;
  }, []);


  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};


