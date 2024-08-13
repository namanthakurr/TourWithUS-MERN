import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { DamanSlidesData } from '../Rajasthan/SlidesData';
import CardsDaman from './CardsDaman';
import DamanCardSlider from './DamanCardSlider';

gsap.registerPlugin(ScrollTrigger);

function  Daman() {
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
                    <source src="/videos/diu.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Daman & Diu</h1>
                    <p>- Coastal Charm</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText} style={{gap:"40px"}}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Damansymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Daman&Diu Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Daman and Diu, the Twin Coastal Delights of India, are a harmonious blend of history and serenity. Known for their colonial heritage, these union territories boast pristine beaches, historic forts, and charming churches. Stroll along the golden sands of Jampore Beach, explore the majestic Diu Fort with its panoramic sea views, and admire the exquisite architecture of St. Paul’s Church. The serene ambiance of Moti Daman and the vibrant markets of Diu add to their unique appeal. Dive into the crystal-clear waters for a refreshing swim or indulge in thrilling water sports. The legacy of Portuguese rule is evident in the quaint streets and culinary delights, from fresh seafood to traditional sweets. Discover the tranquil gardens of Nani Daman or enjoy a sunset at the peaceful Chakratirth Beach. With a rich cultural heritage and warm hospitality, Daman and Diu offer a perfect getaway where the past and present blend seamlessly. Come, experience Daman and Diu, where history, culture, and nature create an idyllic retreat.                                  </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Daman and Diu, twin coastal paradises, enchant with their blend of history and natural beauty. Wander through the tranquil beaches of Jampore and Nagoa, and explore the storied walls of Diu Fort and Moti Daman Fort. The Portuguese legacy is evident in the elegant churches like St. Paul’s and the picturesque streets of Diu town. Dive into the clear waters for aquatic adventures or savor the local seafood delicacies. The serene gardens, bustling markets, and vibrant festivals reflect the cultural richness of these territories. From the captivating sunset views to the welcoming locals, Daman and Diu offer a serene escape where history and nature intertwine. Come, experience the coastal charm of Daman and Diu.                                </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsDaman/>
            <DamanCardSlider
                title="Best Selling Daman&Diu Tour Packages"
                slides={DamanSlidesData}
            />
        </>
    );
}

export default Daman;
