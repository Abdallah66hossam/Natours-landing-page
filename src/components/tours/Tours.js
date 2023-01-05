import React, { useState } from "react";
import ToursCart from "../UI/ToursCart";
import style from "./tours.module.scss";
import img1 from "../../assets/imgs/nat-5.jpg";
import img2 from "../../assets/imgs/nat-6.jpg";
import img3 from "../../assets/imgs/nat-7.jpg";
import Button from "../UI/Button";
import Model from "../model/Model";

const data = [
  {
    title: "The Sea Explorer",
    ul: {
      p1: "5 day tours",
      p2: "Up to 30 people",
      p3: "2 tour guides",
      p4: "Sleep in cozy hotels",
      p5: "Difficulty: easy",
    },
    price: "297",
    img: `linear-gradient(to right bottom , rgb(126, 213, 111, 0.6),rgb(40, 180, 133, 0.6)) ,url(${img1})`,
    background: `linear-gradient(to right bottom , rgb(126, 213, 111, 0.6),rgb(40, 180, 133, 0.6))`,
  },
  {
    title: "The forest hiker",
    ul: {
      p1: "7 day tours",
      p2: "Up to 40 people",
      p3: "2 tour guides",
      p4: "Sleep in provided tents",
      p5: "Difficulty: medium",
    },
    price: "497",
    img: `linear-gradient(to right bottom , rgba(255, 187, 0, 0.6),rgba(255, 120, 48, 0.6)) ,url(${img2})`,
    background: `linear-gradient(to right bottom , rgba(255, 187, 0, 0.6),rgba(255, 120, 48, 0.6))`,
  },
  {
    title: "The snow adventure",
    ul: {
      p1: "3 day tours",
      p2: "Up to 15 people",
      p3: "2 tour guides",
      p4: "Sleep in provided tents",
      p5: "Difficulty: hard",
    },
    price: "897",
    img: `linear-gradient(to right bottom , rgba(41, 152, 255, 0.6),rgba(84, 66, 250, 0.6)) ,url(${img3})`,
    background: `linear-gradient(to right bottom , rgba(41, 152, 255, 0.6),rgba(84, 66, 250, 0.6))`,
  },
];

const Tours = () => {
  const [isShownModal, setIsShownModal] = useState(false);
  const handelModel = () => {
    setIsShownModal(!isShownModal);
  };

  return (
    <div className={style.tours}>
      {isShownModal && <Model isShown={handelModel} />}
      <div className={style.center}>
        <h2>MOST POPULAR TOURS</h2>
      </div>
      <div className={style.cart}>
        {data.map((cart) => (
          <ToursCart key={Math.random()}>
            <section className={style.toggle}>
              <div className={style.cart_front}>
                <div
                  className={style.nature_img}
                  style={{
                    backgroundImage: `${cart.img}`,
                  }}
                >
                  <h4>
                    <span
                      style={{
                        background: `${cart.background}`,
                      }}
                    >
                      {cart.title}
                    </span>
                  </h4>
                </div>
                <ul className={style.list}>
                  <li>{cart.ul.p1}</li>
                  <li>{cart.ul.p2}</li>
                  <li>{cart.ul.p3}</li>
                  <li>{cart.ul.p4}</li>
                  <li>{cart.ul.p5}</li>
                </ul>
              </div>
              <div
                className={style.cart_back}
                style={{ background: `${cart.background}` }}
              >
                <div>
                  <p>only</p>
                  <p>${cart.price}</p>
                </div>
                <Button onClick={handelModel}>Book Now</Button>
              </div>
            </section>
          </ToursCart>
        ))}
      </div>
      <div className={style.center}>
        <Button>Discover All Tours</Button>
      </div>
    </div>
  );
};

export default Tours;
