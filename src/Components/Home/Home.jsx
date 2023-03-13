import {useEffect, useState} from "react";
import { getUpcoming } from "../../Services/axios";
import style from "./home.module.css";
import img from "../../images/Fondo.jpg";
import Loading from "../Loading/Loading";
const Home = () => {
  const [upcom, setUpcom] = useState (0);
  useEffect(()=>{
    const get = async () =>{
      const res = await getUpcoming();
      setUpcom(res);
    } 
    get();
  })
    if(!upcom){
      return <Loading />
    }


  return (
    <>
      <main className={style.main}>
        <div className={style.init}>
          <p className={style.p}>
            Here's your best site to watch Movies, Series, Tv programs and much
            more...
          </p>
            <img className={style.img} src={img} alt="" />
        </div>
   
          
          {upcom.data.results.map((k, index)=>(
            
            <div className={style.container_card}>
              <p className={style.upcomming}>Upcomming</p>
            <div className={style.card} key={index}>
              <h2 className={style.title}>{k.title}</h2>
              <img className={style.img1} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${k.poster_path}`} alt="" />
              <p className={style.overview}>{k.overview}</p>
            </div>
            </div>
            
           
          ))}
      </main>
    </>
  );
};

export default Home;