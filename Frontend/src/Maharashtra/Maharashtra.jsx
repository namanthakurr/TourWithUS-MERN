import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { MaharashtraSlidesData } from '../Rajasthan/SlidesData';
import CardsMaharashtra from './CardsMaharashtra';
import MaharashtraCardSlider from './MaharashtraCradSlider';

gsap.registerPlugin(ScrollTrigger);

function  Maharashtra() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const description = useRef(null);

    useEffect(() => {
        const el = description.current;
        if (el) {
            gsap.fromTo(el,
                { y: 300, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        // markers: true
                    }
                }
            );
        }
    }, []);

    return (
        <>
            <div className={styles.home}>
                <div className={styles.overlay}></div>
                <video muted loop autoPlay className={styles.video} >
                    <source src="/videos/Maharashtra.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Maharashtra</h1>
                    <p>- Land of Splendor</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Mahasymbol.jpg" alt="Maharashtra-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Maharashtra Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Maharashtra, the Gateway to India, is a vibrant fusion of modernity and tradition. This diverse state boasts a rich tapestry of history, culture, and natural beauty. Marvel at the architectural brilliance of the Ajanta and Ellora Caves, and explore the majestic forts of Raigad and Daulatabad. The bustling metropolis of Mumbai, with its iconic Marine Drive and Gateway of India, pulsates with life and energy. Seek serenity in the tranquil landscapes of Lonavala and Mahabaleshwar, or immerse yourself in the spiritual ambiance of Shirdi and Nashik. Discover the pristine beaches of Konkan and the lush greenery of the Western Ghats. Maharashtra’s festivals, from Ganesh Chaturthi to Diwali, are a spectacle of color and joy. The state's culinary delights, including spicy Vada Pav and sweet Puran Poli, tantalize the taste buds. Experience the warmth of its people and the vibrancy of its traditions. Come, explore Maharashtra, where the past and present coexist in harmony, offering an unforgettable journey.                                  </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Maharashtra is a state that dazzles with its dynamic spirit and rich cultural heritage. Wander through the ancient wonders of the Ajanta and Ellora Caves, and the impressive Raigad Fort. Feel the pulse of life in Mumbai, with its bustling streets, Marine Drive, and the iconic Gateway of India. Find peace in the serene hill stations of Lonavala and Mahabaleshwar, and the spiritual havens of Shirdi and Nashik. Explore the pristine beaches along the Konkan coast and the verdant Western Ghats. Experience the vibrant festivals, from Ganesh Chaturthi to Diwali, and savor the diverse local cuisine, from spicy Vada Pav to sweet Puran Poli. Come, discover the vibrant and multifaceted charm of Maharashtra.                                </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsMaharashtra/>
            <MaharashtraCardSlider
                title="Best Selling Maharashtra Tour Packages"
                slides={MaharashtraSlidesData}
            />
        </>
    );
}

export default Maharashtra;
