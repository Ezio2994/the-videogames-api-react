import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront"
import CardBack from "../CardBack"

const Card = (props) => {
  const { fragrance } = props
  const [side, setSide] = useState("front")

  return (
    <div className={styles.card}>
      <CardFront fragrance={fragrance} side={side} setSide={setSide} />
      <CardBack fragrance={fragrance} side={side} setSide={setSide} />
    </div>
  );
};

export default Card;
