import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { AssamCardData } from "../../Rajasthan/CardData";

function CardsAssam() {
  return (
    <div className="container">
      <center>
        <section className={styles.Assam_Cards_Main}>
          <div className={styles.Assam_logo2}>
            <img style={{width:'30%',margin:"10px"}} src="/images/Assam_img/AssamTourism-logo.jpg" alt="Assam-Logo" />
          </div>
          <FlipCardsSection cards={AssamCardData} />
        </section>
      </center>
    </div>
  );
}

export default CardsAssam;
