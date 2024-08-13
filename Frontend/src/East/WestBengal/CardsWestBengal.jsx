import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { WestBengalCardData } from "../../Rajasthan/CardData";

function CardsWestBengal() {
  return (
    <div className="container">
      <center>
        <section className={styles.WestBengal_Cards_Main}>
          <div className={styles.WestBengal_logo2}>
            <img style={{width:'20%',margin:"10px"}} src="/images/WestBengal_img/Bengal-India-Logo.jpg" alt="WestBengal-Logo" />
          </div>
          <FlipCardsSection cards={WestBengalCardData} />
        </section>
      </center>
    </div>
  );
}

export default CardsWestBengal;
