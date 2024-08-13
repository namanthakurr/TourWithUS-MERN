import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { AndhraPradeshSlidesData } from '../Rajasthan/SlidesData';
 import CardsAndhra from './CardsAndhra';
 import AndhraCardSlider from './AndhraCardSlider'

gsap.registerPlugin(ScrollTrigger);

function  AndhraPradesh() {
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
                    <source src="/videos/Andhravideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Andhra Pradesh</h1>
                    <p>- Architectural Splendor</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/andhrasymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About AndhrPradesh Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Andhra Pradesh, a state of timeless charm and dynamic culture, offers a unique blend of heritage, natural beauty, and spiritual depth. Explore the ancient temples of Tirupati, a significant pilgrimage site, and the intricate carvings of the ancient city of Hampi, a UNESCO World Heritage Site. The picturesque landscapes of Araku Valley and the serene beaches of Visakhapatnam provide refreshing retreats for nature enthusiasts. Andhra Pradesh's rich cultural tapestry is showcased in its vibrant festivals, such as Ugadi and Sankranti, and its architectural wonders, including the grand Charminar and the majestic Golconda Fort. The state’s culinary traditions, from spicy Andhra biryani to tangy pulusu, are a delight for food lovers. Adventure seekers can trek through the Eastern Ghats or explore the lush forests of the Papikondalu range. Experience the harmonious blend of tradition and modernity in Andhra Pradesh, where every visit reveals a new layer of history and splendor.                               </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Andhra Pradesh is a captivating land of diverse beauty and rich cultural heritage. Discover the spiritual grandeur of Tirupati, a revered pilgrimage destination, and the historical marvels of Hampi, a UNESCO World Heritage Site. Wander through the ancient temples of Belur and Halebidu, renowned for their exquisite carvings. Unwind in the lush greenery of Araku Valley or enjoy the tranquil beaches of Visakhapatnam. Delight in the vibrant flavors of Andhra cuisine, from spicy Andhra biryani to tangy pulusu. Explore the scenic beauty of the Eastern Ghats, the lush forests of Papikondalu, and the bustling markets of Hyderabad. Andhra Pradesh offers a harmonious blend of tradition and modernity, making every visit a journey of discovery and wonder. Embrace the enchanting allure of Andhra Pradesh, where history and natural beauty merge to create an unforgettable experience.                                            </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsAndhra/>
            <AndhraCardSlider
                title="Best Selling AndhrPradesh Tour Packages"
                slides={AndhraPradeshSlidesData}
            />
        </>
    );
}

export default AndhraPradesh;
