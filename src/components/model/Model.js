import React from "react";
import style from "./model.module.scss";
import Button from "../UI/Button";
import img1 from "../../assets/imgs/nat-8.jpg";
import img2 from "../../assets/imgs/nat-7.jpg";
import { IoIosCloseCircle } from "react-icons/io";

const Model = (props) => {
  const { isShown } = props;
  return (
    <>
      <section>
        <div className={style.background} onClick={isShown} />
        <div className={style.model}>
          <div className={style.imgs}>
            <img src={img1} alt="person1" />
            <img src={img2} alt="person2" />
          </div>
          <div className={style.text}>
            <IoIosCloseCircle className={style.close} onClick={isShown} />
            <h2>start booking now</h2>
            <h3>important – please read these terms before booking</h3>
            <div className={style.details}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                sed risus pretium quam. Aliquam sem et tortor consequat id.
                Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
                neque egestas congue. Placerat orci nulla pellentesque dignissim
                enim sit. Vitae semper quis lectus nulla at volutpat diam ut
                venenatis. Malesuada pellentesque elit eget gravida cum sociis
                natoque pe
              </p>
              <p>
                natibus et. Proin fermentum leo vel orci porta non pulvinar
                neque laoreet. Gravida neque convallis a cras semper. Molestie
                at elementum eu facilisis sed odio morbi quis. Faucibus vitae
                aliquet nec ullamcorper sit amet risus nullam eget. Nam libero
                justo laoreet sit. Amet massa vitae tortor condimentum lacinia
                quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet
                sed euismod ed.
              </p>
            </div>
            <Button>book now</Button>
          </div>
        </div>
      </section>
      )
    </>
  );
};

export default Model;
