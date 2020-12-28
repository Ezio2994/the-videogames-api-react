import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { name, brand, urlImg, category } = props.fragrance;
  const { side, setSide } = props;

  const whichSide = side === "front" ? styles.flipindiag2br : styles.otherSide;

  return (
    <article className={` ${styles.cardFront} ${whichSide} `}>
      <h2>{brand}</h2>
      <h3>{name}</h3>
      <img src={urlImg} alt="" />
      <p>{category}</p>
      <button onClick={() => setSide("back")}>More infos</button>
    </article>
  );
};

export default CardFront;
