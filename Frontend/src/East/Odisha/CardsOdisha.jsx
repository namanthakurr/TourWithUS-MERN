import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { OdishaCardData } from "../../Rajasthan/CardData";

function CardsOdisha() {
  return (
    <div className="container">
      <center>
        <section className={styles.Odisha_Cards_Main}>
          <div className={styles.Odisha_logo2}>
            <img style={{width:'50%',margin:"10px"}} src="/images/Odisha_img/odisha-tourism-logo.png" alt="Odisha-Logo" />
          </div>
          <FlipCardsSection cards={OdishaCardData} />
        </section>
      </center>
    </div>
  );
}

export default CardsOdisha;
