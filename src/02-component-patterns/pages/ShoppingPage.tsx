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

        <ProductCard product={product} >
          {/* Childrens */}
          <ProductImage />
          <ProductTitle title={''} />
          <ProductButtons increaseBy={() => { }} counter={0} />
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