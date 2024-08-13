import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import CardsWestBengal from './CardsWestBengal';
import WBCardSlider from './WBCardSlider';
import { WestBengalSlidesData } from '../../Rajasthan/SlidesData';


gsap.registerPlugin(ScrollTrigger);

function WestBengalFile() {
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
                    <source src="/videos/westBengal-video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>West Bengal</h1>
                    <p>- Land of Festivals and Traditions </p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/WestBengal_img/WestBengal-Tour-Logo.jpg" alt="WestBengal-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About West Bengal Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            The naturally well-endowed West Bengal adorns the eastern part of India. It has towering mountains, a vast sea, expansive forests, rich landscapes, glorious tea gardens, and thriving mangroves. Travellers throng to this beautiful state by opting for West Bengal tours not only to experience nature at its best but also to get a glimpse of the flourishing metropolitan city of Kolkata. West Bengal tourism packages take you to a land that juxtaposes a glorious heritage of the past with the optimistic promises of the future. And at Veena World, we have various options in West Bengal tourism packages online at cost-effective prices. You can choose suitable West Bengal holiday packages online from Veena World to enjoy a fulfilling and exciting tour of West Bengal.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                You can visit the colonial era monuments in Kolkata, or enjoy a day of fun at Nicco Park and Science City. In close proximity to it are cities which are dotted with religious and cultural structures, each of which reflect their glorious past. There are many wildlife sanctuaries in the state where you can enjoy a jungle safari. A cultural tour to the state lets you visit the various pilgrimage destinations. You can visit the colonial era structures, go trekking and enjoy the panoramic views in its gorgeous hill stations.
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
            <CardsWestBengal />
            <WBCardSlider
                title="Best Selling West Bengal Tour Packages"
                slides={WestBengalSlidesData}
            />
        </>
    );
}

export default WestBengalFile;
