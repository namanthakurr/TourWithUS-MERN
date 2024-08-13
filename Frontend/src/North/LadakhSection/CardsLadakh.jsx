import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { LadakhCardData } from "../../Rajasthan/CardData";

function CardsLadakh() {
  return (
    <div className="container">
      <center>
        <section className={styles.Ladakh_Cards_Main}>
          <div className={styles.Ladakh_logo2}>
            <img src="/images/Ladakh_img/LadakhImage.jpg" alt="Ladakh-Logo2" />
          </div>
          <FlipCardsSection cards={LadakhCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsLadakh;
