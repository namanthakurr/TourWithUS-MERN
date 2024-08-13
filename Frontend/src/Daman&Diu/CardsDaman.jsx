import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
import { DamanCardData } from "../Rajasthan/CardData";  

function CardsDaman() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Daman}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/damanlogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={DamanCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsDaman;
