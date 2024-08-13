import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { SikkimCardData } from "../../Rajasthan/CardData";

function CardsSikkim() {
  return (
    <div className="container">
      <center>
        <section className={styles.Sikkim_Cards_Main}>
          <div className={styles.Sikkim_logo2}>
            <img style={{width:'20%',margin:"10px"}} src="/images/Sikkim_img/sikkimLogo-Tour.jpg" alt="Sikkim-Logo" />
          </div>
          <FlipCardsSection cards={SikkimCardData} />
        </section>
      </center>
    </div>
  );
}

export default CardsSikkim;
