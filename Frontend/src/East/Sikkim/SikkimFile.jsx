import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { SikkimSlidesData } from '../../Rajasthan/SlidesData';
import CardsSikkim from './CardsSikkim';
import SikkimCardSlider from './SikkimCardSlider';


gsap.registerPlugin(ScrollTrigger);

function SikkimFile() {
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
                    <source src="/videos/Sikkim _video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Sikkim</h1>
                    <p>- The Hidden Valley of Rice</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/Sikkim_img/Sikkim-logo.jpg" alt="Sikkim-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Sikkim Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                Despite being the smallest state in North East India, Sikkim is one of the most popular places for tourism in India. Its marvelous landscape is dotted with high-altitude lakes, rolling green mountains, colorful rhododendron groves, crystal-clear rivers, milky waterfalls, beautiful monasteries, and the unparalleled views of the third highest mountain in the world, Mount Khangchendzonga.
                                Sikkim shares its borders with the neighboring countries of Nepal, Tibet and Bhutan and is divided into 4 districts namely East Sikkim, West Sikkim, North Sikkim, and South Sikkim. Each of these districts has something unique to offer to the tourists. Sikkim’s culture is a reflection of its neighboring countries as well, being in such close proximity they share common traits.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    Even though Sikkim is known for its quiet monasteries and mighty mountains, it is equally known for its adventure tourism.
                                    There are so many activities in Sikkim for adventure enthusiasts such as climbing the rough and tough mountains like Mount Frey and Mount Thinchenkhan, paragliding through the city of Gangtok, river rafting through the River Rangeet and Teesta, Bungee jumping at the Singshore Bridge, riding a Yak at the Tsomgo Lake, cycling and mountain biking on the Silk Route, and trekking.
                                    Some of the popular treks in Sikkim are Kanchenjunga Base Camp Trek, Yuksom Goecha La Trek, Dzongri Trek, Green Lake Trek and the Darjeeling Sandakphu Singalila Ridge Trek. You can also try camping along the Teesta river bank and experience the beauty of Sikkim and its mountains much closer.
                                </p>
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
            <CardsSikkim />
            <SikkimCardSlider
                title="Best Selling Sikkim Tour Packages"
                slides={SikkimSlidesData}
            />
        </>
    );
}

export default SikkimFile;
