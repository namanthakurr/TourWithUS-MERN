import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { GoaCardData } from "../Rajasthan/CardData";

function CardsGoa() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Goa}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/goalogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={GoaCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsGoa;
