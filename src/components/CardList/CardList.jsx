import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card"

const CardList = (props) => {
  const { games } = props;


  const getCardJsx = (game) => (
    <div className={styles.card} key={game.id}>
      <Card game={game} />
    </div>
  );


  return <section className={styles.cards}> {games.map(getCardJsx)}</section>;

};

export default CardList;
