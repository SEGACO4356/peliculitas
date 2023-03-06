import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

function Nav() {
  return (
    <nav className={style.nav}>
      <Link icon={<FaHome />} to="/" text="Home" />
      <Link icon={<FaUser />} to="/registro" text="Registro" />
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
