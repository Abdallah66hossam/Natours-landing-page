import React, { useState } from "react";
import style from "./form.module.scss";
import Button from "../../components/UI/Button";

const Form = () => {
  // radio buttons
  // taking the inputs from user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // checking for validation
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [err, setErr] = useState(false);

  // taking the inputs from user
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmision = (e) => {
    e.preventDefault();

    if (name.length > 6) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
    if (email.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    const writeIsValid = nameIsValid && emailIsValid;

    if (writeIsValid) {
      setFormIsValid(true);
      setName("");
      setEmail("");
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div className={style.contact}>
      <h2>start booking now</h2>
      <form className={style.form} onSubmit={handelSubmision}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handelName}
          className={err && !nameIsValid && style.inValid}
        />
        <p className={err && !nameIsValid ? style.err : style.errTrans}>
          The name shoul contain 6 charcter or more!
        </p>

        <input
          type="email"
          placeholder="Email Adress"
          value={email}
          onChange={handelEmail}
          className={err && !emailIsValid && style.inValid}
        />
        <p className={err && !emailIsValid ? style.err : style.errTrans}>
          Enter a valid e-mail!
        </p>

        <div className={style.radio}>
          <input type="radio" name="tour" id="small" />
          <span></span>
          <label htmlFor="small">Small tour group</label>
          <input type="radio" name="tour" id="Large" />
          <span></span>
          <label htmlFor="Large">Large tour group</label>
        </div>

        <Button type="submit">Next step</Button>
      </form>
    </div>
  );
};

export default Form;
