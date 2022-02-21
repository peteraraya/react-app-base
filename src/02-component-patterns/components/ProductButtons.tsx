import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ButtonsProps{
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonsProps) => {
  
  // TODO: maxCount : recibir un valor maximo 

  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached = useCallback, [counter, maxCount ] , se utiliza para que el callback se ejecute solo cuando el valor de counter cambie

  // TRUE = si el counter === maxCount
  // FALSE = si el counter !== maxCount

  const isMaxReached = useCallback(
    // !! siempre va a devolver un valor booleano
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );
  
  return (
    <div
      className={`${styles.buttonsContainer} ${className} `}
      style={style}
    >

      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button
        className={` ${styles.buttonAdd} ${isMaxReached() &&  styles.disabled} `}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>

    </div>
  )
}


// interface ProductsButtonProps {
//   increaseBy: (value: number) => void;
//   counter: number;
// }
