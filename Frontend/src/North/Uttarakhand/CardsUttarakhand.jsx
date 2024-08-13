import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import {  UttarakhandCardData } from "../../Rajasthan/CardData";

function CardsUttarakhand() {
  return (
    <div className="container">
      <center>
        <section className={styles.Uttarakhand_Cards_Main}>
          <div className={styles.Uttarakhand_logo2}>
            <img style={{width:'90%',margin:"20px"}} src="/images/Uttarakhand_img/Uttarakhand-logo.jpg" alt="HimachalPradesh-Logo" />
          </div>
          <FlipCardsSection cards={UttarakhandCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsUttarakhand;
