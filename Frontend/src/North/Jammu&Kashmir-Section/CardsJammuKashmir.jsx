import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { JammuAndKashmirCardData } from "../../Rajasthan/CardData";

function CardsJammuKashmir() {
  return (
    <div className="container">
      <center>
        <section className={styles.JammuKashmir_Cards_Main}>
          <div className={styles.JammuKashmir_logo2}>
            <img style={{width:'75%',margin:"10px"}} src="/images/J&K_img/JK_Tour_Logo.jpg" alt="JammuAndKashmir-Logo" />
          </div>
          <FlipCardsSection cards={JammuAndKashmirCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsJammuKashmir;
