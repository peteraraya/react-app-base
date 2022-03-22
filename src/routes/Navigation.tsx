
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

// Optimize imports
import {
  FormikBasicPage,
  FormikAbstraction,
  FormikComponents,
  FormikYupPage,
  RegisterPage
} from '../03-forms/pages';


import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo"></img>
          <ul>
            <li>
              <NavLink to="/" className={ ( {isActive} ) => isActive ? 'nav-active' : '' } >Home</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={ ( {isActive} ) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Formik Abastraction</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ( {isActive} ) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/*" element={<Navigate to="/" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Routes cambio por Switch
// NavLink cambio por Link --> className={({ isActive }) => isActive ? 'nav-active' : ''} end
// <Routes> : cabio en la forma de renderizar los componentes