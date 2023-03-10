import React, { useEffect, useState } from 'react'
import style from "./now.module.css"
import { getNow } from '../../Services/axios.js'
import Loading from '../Loading/Loading';

const Now = () => {

    const [now, setNow] = useState(0);
        useEffect(()=>{
           const get = async ()=>{
            const res = await getNow();
            setNow(res)
           };
           get();
        })
        if(!now){
            return <Loading />
        }

  return (
    <>
    <main className={style.main}> 
        {now.data.results.map((k, index) => (  
         <div className={style.container_card}>
        <div className={style.card} key={index}>
          <h2 className={style.h22}>{k.title}</h2>
          <img className={style.img} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${k.poster_path}`} alt="" />
          <p className={style.p}>{k.overview}</p>
          </div>
        </div>          
  
        ))}
    </main>
    </>
  )
}

export default Now;