import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { KarnatakaCardData } from "../Rajasthan/CardData";

function CardsKarnataka() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Karnataka}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/karnalogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={KarnatakaCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsKarnataka;
