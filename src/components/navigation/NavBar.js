import React, { useState } from "react";
import style from "./nav.module.scss";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../../assets/imgs/logo-white.png";

const NavBar = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  const handelNavBar = () => {
    setNavIsShown(!navIsShown);
  };
  return (
    <div className={style.nav}>
      <img src={logo} alt="logo" className={style.logo} />
      <AiOutlineBars className={style.bars} onClick={handelNavBar} />
      <nav className={navIsShown && style.translate}>
        <IoIosCloseCircle className={style.close} onClick={handelNavBar} />
        <ul>
          <li>
            <a href="#1">
              <span>01</span> about natous
            </a>
          </li>
          <li>
            <a href="#2">
              <span>02</span> your benfits
            </a>
          </li>
          <li>
            <a href="#3">
              <span>03</span> popular tools
            </a>
          </li>
          <li>
            <a href="#4">
              <span>04</span> stories
            </a>
          </li>
          <li>
            <a href="#5">
              <span>05</span> book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
