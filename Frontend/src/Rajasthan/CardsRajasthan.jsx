import React from "react";
import styles from "./Rajasthan.module.css";
import FlipCardsSection from "./FlipCardsSection";
 import { RajasthanCardData } from "./CardData";

function Cards_Rajasthan() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main}>
          <div className={styles.rajasthan_logo2}>
            <img src="/images/Rajasthan_img/Rajasthan_Logo2.png" alt="Rajasthan-Logo2" />
          </div>
          <div className={styles.rajasthan_Pattern}>
            <img src="/images/Rajasthan_img/Rajasthan-Petterns.png" alt="Rajasthan-Pattern" />
          </div>
          <FlipCardsSection cards={RajasthanCardData} />
        </section>
      </center>
    </div>
  );
}

export default Cards_Rajasthan;
