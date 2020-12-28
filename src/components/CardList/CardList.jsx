import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card"

const CardList = (props) => {
  const { fragrances } = props;


  const getCardJsx = (fragrance) => (
    <div className={styles.card} key={fragrance.id}>
      <Card fragrance={fragrance} />
    </div>
  );


  return <section className={styles.cards}> {fragrances.map(getCardJsx)}</section>;

};

export default CardList;
