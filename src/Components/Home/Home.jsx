import React from "react";
import style from "./home.module.css";
import img from "../../images/Fondo.jpg";
import img1 from "../../images/prueba.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.init}>
          <p className={style.p}>
            Here's your best site to watch Movies, Series, Tv programs and much
            more...
          </p>
          <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            Autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <img className={style.img} src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={style.img} src={img1} alt="Carita feliz"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Home;
