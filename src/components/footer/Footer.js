import React from "react";
import footerImg from "../../assets/imgs/logo-green-1x.png";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="logo" />
      <div className={style.flex}>
        <ul className={style.links}>
          <li>company</li>
          <li>contact us</li>
          <li>carrers</li>
          <li>privacy policy</li>
          <li>terms</li>
        </ul>
        <p className={style.copy_right}>
          Built by JONAS SCHMEDTMANN for his online course ADVANCED CSS AND
          SASS. Copyright © by Jonas Schmedtmann. You are 100% allowed to use
          this webpage for both personal and commercial use, but NOT to claim it
          as your own design. A credit to the original author, Jonas
          Schmedtmann, is of course highly appreciated!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
