import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { urlImg } = props.game;
  const { side, setSide } = props;

  const whichSide = side === "front" ? styles.flipindiag2br : styles.otherSide;

  return (
    <article className={` ${styles.cardFront} ${whichSide} `}>
      <img src={urlImg} alt="" />
      <button onClick={() => setSide("back")}>More infos</button>
    </article>
  );
};

export default CardFront;
