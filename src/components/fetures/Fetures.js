import React from "react";
import FetureCart from "../UI/FetureCart";
import style from "./fetures.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { VscCompass } from "react-icons/vsc";
import { TfiMap } from "react-icons/tfi";
import { TfiHeart } from "react-icons/tfi";

const data = [
  {
    icon: <TfiWorld className={style.icon} />,
    title: "EXPLORE THE WORLD",
    detaile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    icon: <VscCompass className={style.icon} />,
    title: "MEET NATURE",
    detaile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    icon: <TfiMap className={style.icon} />,
    title: "FIND YOUR WAY",
    detaile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    icon: <TfiHeart className={style.icon} />,
    title: "LIVE A HEALTHIER LIFE",
    detaile:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
];

const Fetures = () => {
  return (
    <div className={style.skew}>
      <div className={style.fetures}>
        {data.map((cart) => (
          <FetureCart key={Math.random()}>
            {cart.icon}
            <h4>{cart.title}</h4>
            <p>{cart.detaile}</p>
          </FetureCart>
        ))}
      </div>
    </div>
  );
};

export default Fetures;
