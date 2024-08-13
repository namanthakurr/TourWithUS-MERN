import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { MeghalayaSlidesData } from '../Rajasthan/SlidesData';
 import CardsMeghalaya from './CardsMeghalaya';
import  MeghalayaCardSlider from './MeghalayaCardSlider'

gsap.registerPlugin(ScrollTrigger);

function  Meghalaya() {
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
                    <source src="/videos/Meghalayavideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Meghalaya</h1>
                    <p>- Rainfall Haven</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Meghalayasymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Meghalaya Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Meghalaya, the Abode of Clouds, is a breathtaking blend of serenity, natural beauty, and vibrant culture. Famous for its majestic waterfalls, lush green landscapes, and mystical caves, this northeastern state offers a unique array of experiences. Discover the enchanting living root bridges of Cherrapunji and Nongriat, marvel at the crystal-clear waters of Dawki, and explore the quaint charm of Mawlynnong, the cleanest village in Asia. The region's diverse culture is reflected in its traditional music, dance, and festivals, while its cuisine offers a delightful array of flavors, from spicy jadoh to mouth-watering pork dishes. Nature enthusiasts will be awed by the scenic beauty of Shillong, the rolling hills of Jaintia, and the picturesque landscapes of Garo. Immerse yourself in the rich heritage and natural splendor of Meghalaya, where every moment is a celebration of the extraordinary. Come, experience Meghalaya, where adventure, culture, and nature converge to create an unforgettable journey.                                                    </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Meghalaya is a mystical haven that enchants with its verdant landscapes and rich cultural tapestry. Wander through the lush hills of Shillong, marvel at the living root bridges of Cherrapunji, and bask in the pristine beauty of Dawki’s crystal-clear waters. Explore the traditional charm of Mawlynnong, Asia's cleanest village, and savor the diverse flavors of Khasi, Garo, and Jaintia cuisine, from spicy jadoh to succulent pork dishes. Experience the mesmerizing beauty of Nohkalikai Falls and the serene forests of Nokrek Biosphere Reserve. With its blend of natural splendors and cultural vibrancy, every corner of Meghalaya beckons adventure and serenity. Embrace the mystical allure of Meghalaya, where nature and tradition weave an unforgettable tapestry.                                       </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsMeghalaya/>
            <MeghalayaCardSlider
                title="Best Selling Meghalaya Tour Packages"
                slides={MeghalayaSlidesData}
            />
        </>
    );
}

export default Meghalaya;
