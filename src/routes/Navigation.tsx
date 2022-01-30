
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from '../01-Lazyload/router/routes';


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo"></img>
            <ul>
              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ to, path, Component }) => (
                <Route
                  key={to}
                  path={path}
                  element={<Component />}
                />
              ))
            }

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

// Routes cambio por Switch
// NavLink cambio por Link --> className={({ isActive }) => isActive ? 'nav-active' : ''} end
// <Routes> : cabio en la forma de renderizar los componentes

// <Suspense> : cambio por Suspense este sirve para que cuando cargue un componente haz lo siguiente 