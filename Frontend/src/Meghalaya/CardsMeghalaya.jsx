import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { MeghalayaCardData } from "../Rajasthan/CardData";

function CardsMeghalaya() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main_Meghalaya}>
          <div className={styles.Gujrat_logo2}>
            <img src="/images/Rajasthan_img/Meghalayalogo.jpg" alt="Rajasthan-Logo2" />
          </div>   
          <FlipCardsSection cards={MeghalayaCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsMeghalaya;
