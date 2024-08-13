import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { MPSlidesData } from '../Rajasthan/SlidesData';
import CardsMP from './CardsMp';
import MPCardSlider from './MPCardSlider';

gsap.registerPlugin(ScrollTrigger);

function  MadhyaPradesh() {
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
                    <source src="/videos/MahakalLok.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Madhya Pradesh</h1>
                    <p>- Heart of India</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/mplogo.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About MP Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Madhya Pradesh, the Heart of India, is a captivating blend of ancient grandeur and natural splendor. Known for its rich history, this state offers a tapestry of majestic forts, serene temples, and vibrant wildlife. Explore the intricate frescoes of the Khajuraho Temples, marvel at the stunning architecture of Gwalior Fort, and wander through the lush landscapes of Bandhavgarh National Park. The legacy of illustrious rulers and cultural figures adds depth to its heritage. Seek spiritual solace at the peaceful temples of Ujjain or revel in the bustling markets of Indore. Nature enthusiasts will be enchanted by the tranquil beauty of Pachmarhi and the breathtaking waterfalls of Bhedaghat. The local cuisine, from spicy Poha to sweet Jalebi, reflects the diverse flavors of this land. Embrace the warmth of its people and the vibrancy of its festivals. Come, experience Madhya Pradesh, where history, culture, and nature converge to offer an unforgettable journey.
                                  </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Madhya Pradesh is a land that captivates with its timeless charm and rich tapestry of experiences. Traverse through the ancient marvels of Khajuraho's temples, the majestic Gwalior Fort, and the lush greenery of Bandhavgarh National Park. Hear the echoes of history in the sacred temples of Ujjain and the tranquil ambiance of Pachmarhi’s hills. From the vibrant local markets to the serene beauty of Bhedaghat's waterfalls, every corner of this state tells a story. Immerse yourself in the rhythms of traditional festivals and the diverse flavors of local cuisine. Come, discover the enchanting allure of Madhya Pradesh.
                                </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsMP/>
            <MPCardSlider
                title="Best Selling MadhyaPradesh Tour Packages"
                slides={MPSlidesData}
            />
        </>
    );
}

export default MadhyaPradesh;
