import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { GujratCardData } from "../Rajasthan/CardData";

function Cards_Gujrat() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Gujrat}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/gujratlogo.jpg" alt="Rajasthan-Logo2" />
          </div>
          
          <FlipCardsSection cards={GujratCardData} />
        </section>
      </center>
    </div>
  );
}

export default  Cards_Gujrat;
