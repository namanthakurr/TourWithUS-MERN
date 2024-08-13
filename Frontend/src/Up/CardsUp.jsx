import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { UttarPradeshCardData } from "../Rajasthan/CardData";

function CardsUp() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Up}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/uplogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={UttarPradeshCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsUp;
