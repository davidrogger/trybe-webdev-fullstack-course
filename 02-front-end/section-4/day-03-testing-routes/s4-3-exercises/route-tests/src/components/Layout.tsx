import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
