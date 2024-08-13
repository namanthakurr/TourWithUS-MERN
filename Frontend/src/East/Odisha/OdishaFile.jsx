import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import CardsOdisha from './CardsOdisha';
import OdishaCardSlider from './OdishaCardSlider';
import { OdishaSlidesData } from '../../Rajasthan/SlidesData';

gsap.registerPlugin(ScrollTrigger);

function OdishaFile() {
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
                    <source src="/videos/Odisha-video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Odisha</h1>
                    <p>- The Land of Lord Jagannath</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/Odisha_img/Odisha-logo.png" alt="Odisha-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Odisha Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                A true extraordinaire, Odisha is the quiet and serene part of India. Fringed by the Bay of Bengal, and flaunting a long coastline, this east Indian gem has some of the most stunning beaches that are often less-frequented. Home to a plethora of Hindu and Buddhist pilgrimage sites, Odisha is a place that will take you back to the glorious time of Ashoka the Great. Explore the majestic Jagannath Temple at Puri and learn about its many mysteries, view the medieval architecture of Odisha’s temple and Buddhist monasteries, attend the annual Sand Art Festival, go boating in the Chilika Lake, or walk on the sea at Chandipur Beach. There's so much to do in Odisha.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    The intriguing history and rich culture of Orissa also make it a perfect tourist destination for all kinds of travelers. Odisha tour packages provide travelers with the chance to visit several sites in the state that are famed for their unique and intriguing architecture.
                                    Orissa is also well-known for keeping its traditions and culture alive, while also embracing rapid modernization. Many Orissa tourism packages also offer travelers the chance to visit Bhubaneswar, which is a unique destination in itself, housing more than five hundred temples, while also being one of the key cosmopolitan centers of eastern India.
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
            <CardsOdisha />
            <OdishaCardSlider
                title="Best Selling Odisha Tour Packages"
                slides={OdishaSlidesData}
            />
        </>
    );
}

export default OdishaFile;
