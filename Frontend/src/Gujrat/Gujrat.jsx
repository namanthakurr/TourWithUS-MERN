import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { GujratSlidesData } from '../Rajasthan/SlidesData';
import GujratCardSlider from './GujratCardSlider';
import CardsGujrat from './CardsGujrat';

gsap.registerPlugin(ScrollTrigger);

function  Gujrat() {
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
                    <source src="/videos/gujarat.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Gujarat</h1>
                    <p>- Land of Legends</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Gujrat-symbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Gujarat Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Gujarat, the Jewel of the West, is a vibrant tapestry of history, culture, and tradition. Renowned for its entrepreneurial spirit and rich heritage, this state offers a unique blend of the ancient and the contemporary. From the intricate carvings of the Sun Temple at Modhera to the bustling markets of Ahmedabad, Gujarat's architectural marvels narrate tales of a glorious past. The legends of Gujarat, such as the valor of Sardar Vallabhbhai Patel and the spiritual teachings of Mahatma Gandhi, add a profound depth to its history. Travelers seeking spiritual solace can find peace at the tranquil Sabarmati Ashram, while adventure enthusiasts can explore the vast expanses of the Rann of Kutch. Food lovers will delight in the state’s diverse and delectable cuisine, from the tangy Dhokla to the sweet Puran Poli. The warmth of the people and the vibrancy of its festivals, like Navratri, add to the state’s charm. Come, discover the essence of Gujarat, where every corner tells a story and every visit is an unforgettable experience.                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Gujarat is a land that has inspired countless souls with its rich heritage and dynamic spirit. Walk through the sands of time and experience the diverse hues of Gujarat's natural and cultural landscape. From the white expanse of the Rann of Kutch to the verdant Gir Forest, where the majestic Asiatic lions roam, and the vibrant street art of Vadodara. Listen to the melodic rhythms of traditional Garba or the serene sounds of the Arabian Sea waves. The sights and sounds here are unlike any other, immersing you in stories of old and new. Every inch of this paradise is alive with music, art, and dance. Come, step into the unforgettable embrace of Gujarat.                                </p>
                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsGujrat/>
            <GujratCardSlider
                title="Best Selling Gujarat Tour Packages"
                slides={GujratSlidesData}
            />
        </>
    );
}

export default Gujrat;
