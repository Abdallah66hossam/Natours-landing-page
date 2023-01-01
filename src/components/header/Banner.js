import React from "react";
import Button from "../UI/Button";
import Navigation from "./Navigation";
import style from "./style/banner.module.scss";

const Banner = () => {
  return (
    <>
      <Navigation />
      <main className={style.banner}>
        <div className={style["__text-box"]}>
          <h1 className={style.heading}>
            <span>Outdoors</span>
            <span>is where life happens</span>
          </h1>
          <Button>
            <a href="#section-tours">Discover our tours</a>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Banner;
