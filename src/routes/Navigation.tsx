
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-Lazyload/pages';


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo"></img>
          <ul>
            <li>
              <NavLink to="/" className={ ( {isActive} ) => isActive ? 'nav-active' : '' } >Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
            {/* <li>
              <NavLink to="/lazy1" className={ ( {isActive} ) => isActive ? 'nav-active' : '' } >Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={ <ShoppingPage /> } />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/*" element={<Navigate to="/" replace /> } />
          {/* <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Routes cambio por Switch
// NavLink cambio por Link --> className={({ isActive }) => isActive ? 'nav-active' : ''} end
// <Routes> : cabio en la forma de renderizar los componentes