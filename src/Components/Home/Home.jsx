import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { getMovies } from "../../Services/axios.js";
import style from "./home.module.css"

const Home = () => {
  const [movies, setMovies] = useState(0);
  useEffect(() => {
    const get = async () => {
      const res = await getMovies.getPopular();
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
            <h2>{k.title}</h2>
            <img className={style.img} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${k.poster_path}`} alt="" />
            <p>{k.overview}</p>
            </div>
          </div>
        ))}
      </div>
      </main>
    </>
  );
};

export default Home;
