import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList"

const Dashboard = (props) => {
  const { fragrances } = props

  return (
    <section className={styles.dashboard}>
      <h1>Fragrances Cards</h1>
      <CardList fragrances={fragrances} />
    </section>
  )
};

export default Dashboard;
