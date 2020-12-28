import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { description, baseNotes, topNotes, heartNotes, launchDate } = props.fragrance
  const { side, setSide } = props;

  const whichSide = side === "back" ? styles.flipindiag2br : styles.otherSide;

  return (
    <article className={`${styles.cardBack} ${whichSide}`}>
      <h4>Base Notes:</h4>
      <p>{baseNotes}</p>
      <h4>Top Notes:</h4>
      <p>{topNotes}</p>
      <h4>heartNotes:</h4>
      <p>{heartNotes}</p>
      <article className={styles.description}>
        <h4>Description:</h4>
        <p>{description}</p>
      </article>
      <button onClick={() => setSide("front")}>Back</button>
    </article>
  );
};

export default CardBack;
