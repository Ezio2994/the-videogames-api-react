import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront"
import CardBack from "../CardBack"

const Card = (props) => {
  const { game } = props
  const [side, setSide] = useState("front")

  return (
    <div className={styles.card}>
      <CardFront game={game} side={side} setSide={setSide} />
      <CardBack game={game} side={side} setSide={setSide} />
    </div>
  );
};

export default Card;
