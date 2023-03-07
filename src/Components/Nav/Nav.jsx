import { useState, useEffect } from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

function Nav() {

  const [nav, setNav] = useState ();

  const scroll = () =>{
    
  }
 

  return (
    <nav className={style.nav}>
      <div className={style.container_icons}>
      <Link icon={<FaHome  className={style.home}/>} to="/" text="Home" />
      <Link icon={<FaUser  className={style.user}/>} to="/registro" text="Registro" />
      </div>
    </nav>
  );
}

const Link = ({ text, to, icon }) => {
  return (
    <NavLink to={to} className={style.link}>
      {icon}
      <span className={style.link_span}>{text}</span>
    </NavLink>
  );
};

export default Nav;
