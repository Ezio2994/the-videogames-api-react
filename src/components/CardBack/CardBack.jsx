import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { name, year, developer, category, mode, serie } = props.game
  const { side, setSide } = props;

  const whichSide = side === "back" ? styles.flipindiag2br : styles.otherSide;

  return (
    <article className={`${styles.cardBack} ${whichSide}`}>
      <h2>{name}</h2>
      <p>Serie: {serie}</p>
      <p>Release Year: {year}</p>
      <p>Developer: {developer}</p>
      <p>Category: {category}</p>
      <p>Mode: {mode}</p>
      <button onClick={() => setSide("front")}>Back</button>
    </article>
  );
};

export default CardBack;
