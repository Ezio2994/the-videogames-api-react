import React from "react";
import styles from "./About.module.scss";
import { Link } from "@reach/router"

const About = () => {
  return (
    <section className={styles.about}>
      <article>
        <h1>Welcome to The VideoGames Api</h1>

        <p>
          Check out the <Link to="dashboard">dashboard</Link> to see examplases of data you can get from this API.
        </p>
      </article>

      <article>
        <h3>End points:</h3>
        <h4>To get 25 random videogames:</h4>
        <span>https://the-videogames-api.herokuapp.com/games</span>
      </article>
      <article>
        <h4>To get the games by Name, Serie, Category or developer</h4>
        <p>You can get games based on one of the above properties like so:</p>
        <span>https://the-videogames-api.herokuapp.com/games?serie=name-of-the-serie</span> <br />
        <p>Or with multiple properties like so</p>
        <span>https://the-videogames-api.herokuapp.com/games?name=name-of-the-game&serie=name-of-the-serie</span> <br />
      </article>

    </section>
  );
};

export default About;
