import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { pages } from "../Pages/pages";

function Navbar({linkTo, navName}) {
  return (
    <nav class='navbar'>
      {pages.map((page) => (
        <NavLink to={page.link}>{page.name}</NavLink>
        ))}
       
        
       
        
    </nav>
  );
}

export default Navbar;