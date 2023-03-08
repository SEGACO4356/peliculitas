import React, { useEffect, useState } from "react";
import { getTop } from "../../Services/axios.js";
import Loading from "../Loading/Loading.jsx";
import style from "./top.module.css";

const Top = () => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    const get = async () => {
      const res = await getTop();
      setTop(res);
    };
    get();
  });
  if (!top) {
    return <Loading />;
  }

  return (
    <>
      <main className={style.main}>
        {top.data.results.map((k, index) => (
          <div className={style.container_card}>
            <div className={style.card} key={index}></div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Top;
