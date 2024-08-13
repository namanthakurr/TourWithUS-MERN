import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { MaharashtraCardData } from "../Rajasthan/CardData";

function CardsMaharashtra() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Maharashtra}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/Mahalogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={MaharashtraCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsMaharashtra;
