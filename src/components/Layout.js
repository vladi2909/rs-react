import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className='header__link'>
          Home
        </Link>
        <Link to="/about" className='header__link'>
          About
        </Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};