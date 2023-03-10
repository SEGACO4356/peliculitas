import React from "react";
import style from "./home.module.css";
import img from "../../images/Fondo.jpg"
const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.init}>
          <p className={style.p}>Here's your best site to watch Movies, Series, Tv programs and much more...</p>

          <img className={style.img} src={img} alt=""  />
        </div>
      </main>
    </>
  );
};

export default Home;
