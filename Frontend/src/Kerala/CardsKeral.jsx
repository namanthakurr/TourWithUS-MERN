import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { KeralaCardData } from "../Rajasthan/CardData";

function CardsKeral() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Keral}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/kerallogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={KeralaCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsKeral;
