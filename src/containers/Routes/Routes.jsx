import React from "react";
import styles from "./Routes.module.scss";

import { Router } from "@reach/router"
import Dashboard from "../Dashboard"
import About from "../../components/About"

const Routes = (props) => {
  const { games } = props;

  return (
    <Router>
      <About path="/" />
      <Dashboard path="dashboard" games={games} />
    </Router>
  );
};

export default Routes;
