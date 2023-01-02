import React from "react";
import style from "./about.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import nat1 from "../../assets/imgs/nat-1.jpg";
import nat2 from "../../assets/imgs/nat-2.jpg";
import nat3 from "../../assets/imgs/nat-3.jpg";

const About = () => {
  return (
    <section className={style.about}>
      <div className={style.center}>
        <h2 className={style.heading}>exciting tours for adventurous people</h2>
      </div>
      <section className={style["par__about"]}>
        <section className={style.details}>
          <div className={style["details__text"]}>
            <h3>you are going to fall in love with nature</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
          <div className={style["details__text"]}>
            <h3>live adventure like you never have before</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>
          </div>
          <a href="#learn-more" className={style.learn_more}>
            Learn more
            <HiOutlineArrowNarrowRight className={style.arrow} />
          </a>
        </section>
        <div className={style["about__imgs"]}>
          <div className={style["img__flex"]}>
            <img src={nat1} alt="nature_photo" />
            <img src={nat2} alt="nature_photo" className="p2" />
          </div>
          <img src={nat3} alt="nature_photo" />
        </div>
      </section>
    </section>
  );
};

export default About;
