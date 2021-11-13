// importamos el Navigation que esta en nuestro modulo y no el de la raiz
import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Main Page</h1>
      <Navigation />
    </div>
  )
}

// Utilizamos default porque es un componente que cargaremos de forma peresosa
export default LazyLayout;