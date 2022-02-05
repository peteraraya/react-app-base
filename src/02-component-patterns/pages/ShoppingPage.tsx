import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

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
        <ProductCard product={product} >
          {/* Childrens */}
          <ProductImage />
          <ProductTitle  />
          <ProductButtons />
        </ProductCard>

        {/* Patrón 2 : Componente con propiedades */}
        <ProductCard product={product} >
          {/* Childrens */}
          <ProductCard.Image img='' />
          <ProductCard.Title title={'Café forma 2'} />
          <ProductCard.Buttons />
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