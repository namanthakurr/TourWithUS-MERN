import React from "react";
import styles from '../../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../../Rajasthan/FlipCardsSection"; 
 import { HimachalPradeshCardData } from "../../Rajasthan/CardData";

function CardsHimachalPradesh() {
  return (
    <div className="container">
      <center>
        <section className={styles.HimachalPradesh_Cards_Main}>
          <div className={styles.HimachalPradesh_logo2}>
            <img style={{width:'100%',margin:"10px"}} src="/images/HimachalPradesh_img/HP-Logo.png" alt="HimachalPradesh-Logo" />
          </div>
          <FlipCardsSection cards={HimachalPradeshCardData} />
        </section>
      </center>
    </div>
  );
}

export default  CardsHimachalPradesh;
