import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Rajasthan.module.css";

gsap.registerPlugin(ScrollTrigger);

function FlipCardsSection({ cards }) {
  const cardRefs = useRef([]);

  useEffect(() => {
    const animations = cardRefs.current.map((el, index) => {
      return gsap.fromTo(el,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'top 50%',
            scrub: true, // Adding scrub for smoother animation on scroll
            // markers: true, // Uncomment to see scroll trigger markers
          }
        }
      );
    });

    return () => {
      // Clean up animations on unmount
      animations.forEach(animation => animation.kill());
      ScrollTrigger.refresh();
    };
  }, [cards]);

  return (
    <div className={styles.Cities}>
      {cards.map((card, index) => (
        <div
          key={index}
          ref={el => cardRefs.current[index] = el}
          className={styles.card}
        >
          <div className={styles.firstcontent}>
            <span>{card.title}</span>
            <div className={styles.firstImage}>
              <img src={card.image} alt={card.title} />
            </div>
          </div>
          <div className={styles.secondcontent}>
            <span>{card.title}</span>
            <p>{card.description}</p>
            <div className={styles.secondImage}>
              <img src={card.image} alt={card.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlipCardsSection;
