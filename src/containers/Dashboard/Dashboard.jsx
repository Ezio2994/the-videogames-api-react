import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList"

const Dashboard = (props) => {
  const { games } = props

  return (
    <section className={styles.dashboard}>
      <h1>Games Cards</h1>
      <CardList games={games} />
    </section>
  )
};

export default Dashboard;
