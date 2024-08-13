import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { MPCardData } from "../Rajasthan/CardData";

function CardsMP() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_MP}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/mp.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={MPCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsMP;
