import React from 'react'
import style from "./footer.module.css"
import { NavLink } from 'react-router-dom'
import { RiFacebookCircleFill } from "react-icons/ri"
import { TbBrandGithub } from 'react-icons/tb'


const Footer = () => {
  return (
    <>
    <div className={style.footer}>
    <p className={style.title}>Peliculitas</p>
    <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi placeat dolor voluptates? Labore iusto facilis, eligendi hic modi maiores maxime blanditiis, obcaecati deserunt optio eum corrupti, doloremque illum voluptatem.</p>
    <div className={style.iconsC}>
        <Link icon={<RiFacebookCircleFill className={style.facebook}/>} to="/" ></Link>
        <Link icon={<TbBrandGithub className={style.git}/>} to="/"></Link>
     </div>
    </div>
    </>
  )
}
const Link = ({  to, icon }) => {
    return (
      <NavLink to={to} className={style.link}>
        {icon}
      </NavLink>
    );
  };

export default Footer