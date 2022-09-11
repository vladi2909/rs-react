import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className='header__link'>
          Home
        </NavLink>
        <NavLink to="/about" className='header__link'>
          About
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};