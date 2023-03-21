import React, { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import { getPopular } from "../../Services/axios.js";
import style from "./popular.module.css"

const Popular = () => {
const [movies, setMovies] = useState(0);
  useEffect(() => {
    const get = async () => {
      const res = await getPopular();
      setMovies(res);
    };
    get();
  });
  if (!movies) {
    return <Loading />;
  }
  return (
    <>
    <main className={style.main}>
      <div className={style.direction}>
         <h2 className={style.h2}>
         Most Popular movies
          </h2>
        {movies.data.results.map((k, index) => (
         
           <div className={style.container_card}>
          <div className={style.card} key={index}>
            <h2 className={style.h22}>{k.title}</h2>
            <img className={style.img} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${k.poster_path}`} alt="" />
            <p className={style.p}>{k.overview}</p>
            </div>
          </div>
        ))}
      </div>
      </main>
    </>
  );
};
export default Popular