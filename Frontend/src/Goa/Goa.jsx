import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { GoaSlidesData } from '../Rajasthan/SlidesData';
 import CardsGoa from './CardsGoa';
import GoaCardSlider from './GoaCardSlider';

gsap.registerPlugin(ScrollTrigger);

function  Goa() {
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
                    <source src="/videos/goavideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Goa</h1>
                    <p>-  Beach Haven</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/goasymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Goa Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Goa, the Jewel of the West Coast, is a captivating blend of sun, sand, and vibrant culture. Known for its idyllic beaches, this state offers a rich tapestry of historical landmarks, lively markets, and serene coastal beauty. Discover the colonial charm of Old Goa’s churches, bask in the sun at the popular Baga and Palolem Beaches, and enjoy the lively nightlife in Goa’s bustling towns. The legacy of Portuguese rule is evident in the architecture and culinary delights, from spicy Goan curries to fresh seafood. Nature enthusiasts will be enchanted by the breathtaking Dudhsagar Falls and the lush greenery of the Western Ghats. Dive into the vibrant local festivals and immerse yourself in the diverse culture. Come, experience Goa, where history, nature, and relaxation blend seamlessly to offer an unforgettable escape.                                  </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Goa is a vibrant haven that enchants with its blend of sun-soaked beaches and rich cultural heritage. Wander through the colonial streets of Old Goa, explore the lively markets of Panaji, and relax on the golden sands of Baga and Palolem Beaches. Experience the natural splendor of Dudhsagar Falls and the lush landscapes of the Western Ghats. From the vibrant nightlife to the serene coastal sunsets, every aspect of Goa invites exploration. Savor the unique flavors of Goan cuisine and immerse yourself in the lively local festivals. Come, discover the irresistible charm of Goa.                                </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsGoa/>
            <GoaCardSlider
                title="Best Selling Goa Tour Packages"
                slides={GoaSlidesData}
            />
        </>
    );
}

export default Goa;
