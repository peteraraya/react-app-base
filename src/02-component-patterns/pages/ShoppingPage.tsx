
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  // utlizando el hook
  const { shoppingCart, onProductCountChange } = useShoppingCart();


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        {/* Se dejan las dos formas de llamar los componentes para darle soporte - pero se recomienda elegir una de ellas y estandarizar */}
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={onProductCountChange} // si lo emitimos sin función el valor que emita el onchange sera el primer argumento que va a mandar llamarse
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.25)' }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">

        {
          Object.entries(shoppingCart).map(([key, product]) => (

            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: '100px' }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.25)' }} />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}

              />
            </ProductCard>

          ))

        }
      </div>

      {/* <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div> */}

    </div>
  );
};

/**
 * Compound Components Pattern (Composicion de componentes)
 *  Lo que busca que tengamos un componente padre y que internamente tengamos uno o varios componentes hijos
 *  Este patron es muy utilizado en ionic
 * 
 *  Object.entries(shoppingCart) : nos permite obtener las entradas de un objeto
 */
