import React from "react";
import style from "./feture_cart..module.scss";

const FetureCart = (props) => {
  return <div className={style.cart}>{props.children}</div>;
};

export default FetureCart;
