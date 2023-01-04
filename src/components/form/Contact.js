import React from "react";
import Form from "./Form.js";
import style from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contact_img}>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
