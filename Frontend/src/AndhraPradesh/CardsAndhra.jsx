import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { AndhraPradeshCardData } from "../Rajasthan/CardData";

function CardsAndhra() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Andhra}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/Andhralogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={AndhraPradeshCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsAndhra;
