import { useState } from 'react';

export const useProduct = () => {
  
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    // almacena el valor previo y le suma el valor entrante, devolverá  el valor mayor 
    setCounter(prev => Math.max(prev + value, 0));
  }


  return {
    counter,
    increaseBy
  };
};


