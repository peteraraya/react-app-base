import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import '../styles/custom-styles.css';


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}



export const ShoppingPage = () => {
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

        {/* Patrón 1 : LLamo los subcomponentes importandolos */}
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          {/* Childrens */}
          <ProductImage
            className='custom-image'
            style={{
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
            }}
          />
          <ProductTitle
            title={'Café forma 1'}
            className="text-bold"
            activeClass="active"
          />
          <ProductButtons
            className="custom-buttons"
          />
        </ProductCard>

        {/* Patrón 2 : Componente con propiedades */}
        <ProductCard
          product={product}
          className='bg-dark'
        >
          {/* Childrens */}
          <ProductCard.Image img='' />
          <ProductCard.Title title={'Café forma 2'} className="" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Styles */}
        <ProductCard
          product={product}
          style={{
            backgroundColor: '#581701a9',
          }}
        >
          {/* Childrens */}
          <ProductImage
            className='custom-image'
            style={{
              backgroundColor: '#1e98fcb7',
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
            }}
          />
          <ProductTitle
            title={'Café forma 1'}
            className="text-bold"
            activeClass="active"
            style={{
              color: '#00fc86',
            }}
          />
          <ProductButtons
            className="custom-buttons"
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>
      </div>

    </div>
  );
};

/**
 * Compound Components Pattern (Composicion de componentes)
 *  Lo que busca que tengamos un componente padre y que internamente tengamos uno o varios componentes hijos
 *  Este patron es muy utilizado en ionic
 */
