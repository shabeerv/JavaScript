import React from "react";
import spinner from "../../assets/img/spinner/spinner.svg";
import "./Loader.css";

export default function Loader({ show }) {
  return (
    <div className={show ? "spinner-container" : "spinner-container spinner-hide"}>
      <img alt="loader" src={spinner} />
    </div>
  );
}

