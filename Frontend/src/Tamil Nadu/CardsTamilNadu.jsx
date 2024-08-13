import React from "react";
import styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { TamilNaduCardData } from "../Rajasthan/CardData";

function CardsTamilNadu() {
  return (
    <div className="container">
      <center>
        <section className={styles.TamilNadu_Cards_Main}>
          <div className={styles.TamilNadu_logo2}>
            <img style={{width:'20%',margin:"10px"}} src="/images/TamilNadu_img/Tamilnadu_Tourism_Logo.jpg" alt="TamilNadu-Logo" />
          </div>
          <FlipCardsSection cards={TamilNaduCardData} />
        </section>
      </center>
    </div>
  );
}

export default CardsTamilNadu;
