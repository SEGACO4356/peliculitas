import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaFastForward, FaSortAmountUpAlt, FaRegGrinStars} from "react-icons/fa";
import { RiUserReceivedLine } from "react-icons/ri"

function Nav() {

 

  return (
    <nav className={style.nav}>
      <div className={style.container_icons}>
      <Link icon={<FaHome  className={style.home}/>} to="/" text="Home" />
      <Link icon={<FaFastForward className={style.now}/>} to="/now" text="Now" />
      <Link  icon={<FaSortAmountUpAlt className={style.top}/>} to="/top" text="Top" />
      <Link icon={<FaRegGrinStars className={style.popular}/>} to="/popular" text="Popular" />
      <Link icon={<RiUserReceivedLine className={style.login} />} to="/login" text="Login"/>
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
