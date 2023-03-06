import React from "react";
import style from "./error.module.css";

const Error = () => {
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <p className={style.p}>
            <span>Look like you're lost in space</span>
          </p>
          <h1 className={style.h1}>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <a href="/" className={style.a}>
            {" "}
            <span>Go back</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Error;
