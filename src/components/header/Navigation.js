import React from "react";
import logo from "../../assets/imgs/logo-white.png";
import style from "./style/nav.module.scss";

const Navigation = () => {
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" className={style.__logo} />
    </div>
  );
};

export default Navigation;
