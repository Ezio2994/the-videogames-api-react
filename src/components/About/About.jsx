import React from "react";
import styles from "./About.module.scss";
import { Link } from "@reach/router"

const About = () => {
  return (
    <section className={styles.about}>
      <article>
        <h1>Welcome to The Perfume Api</h1>
        <h2>Made with datas from <a href="https://www.theperfumeshop.com/" target="_blank" >theperfumeshop</a></h2>

        <p>
          Check out the <Link to="dashboard">dashboard</Link> to see examplases of data you can get from the this API.
        </p>
      </article>

      <article>
        <h3>End points:</h3>
        <h4>To get all the fragrances:</h4>
        <span>https://the-perfume-api.herokuapp.com/fragrances</span>
      </article>
      <article>
        <h4>To get the fragrances by category</h4>
        <span>https://the-perfume-api.herokuapp.com/fragrances?category=Eau de Toilette</span> <br />
        <span>https://the-perfume-api.herokuapp.com/fragrances?category=Eau de Parfum</span>
      </article>
      <article>
        <h4>To get fragrances by brand(The brand name must be written all capital letters)</h4>
        <span>https://the-perfume-api.herokuapp.com/fragrances?brand=</span>
      </article>

    </section>
  );
};

export default About;
