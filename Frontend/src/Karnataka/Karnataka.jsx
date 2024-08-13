import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { KarnatakaSlidesData } from '../Rajasthan/SlidesData';
 import CardsKarnataka from './CardsKarnataka';
 import KarnatakaCardSlider from './KarnatakaCardSlider'

gsap.registerPlugin(ScrollTrigger);

function  Karnataka() {
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
                    <source src="/videos/KArnatakavideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Karnataka</h1>
                    <p>- Nature's Treasure</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Karnatakasymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Karnataka Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Karnataka, the Land of Splendor, is a captivating blend of history, nature, and culture. Known for its vibrant cities, scenic landscapes, and architectural marvels, this state offers a rich tapestry of experiences. Discover the royal heritage of Mysore with its grand palaces and festivals, and explore the ancient ruins of Hampi, a UNESCO World Heritage Site. The lush coffee plantations of Coorg and the pristine beaches of Gokarna provide a serene escape for nature lovers. Karnataka's diverse culture is reflected in its temples, such as the intricately carved Belur and Halebidu, and the bustling markets of Bangalore. Savor the state's culinary delights, from spicy Bisi Bele Bath to delectable Mysore Pak. Adventure seekers can trek in the Western Ghats, spot wildlife in Bandipur and Nagarhole, or enjoy water sports in the picturesque coastal towns. Immerse yourself in Karnataka's rich traditions and festivals, where history and modernity coexist harmoniously. Experience Karnataka, where every journey unfolds a new story of wonder and beauty.                                 </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Karnataka is a land of splendor that enchants with its diverse landscapes and rich historical heritage. Wander through the royal city of Mysore, renowned for its opulent palaces and vibrant festivals. Explore the ancient ruins of Hampi, a UNESCO World Heritage Site, and marvel at the intricate carvings of Belur and Halebidu temples. Relax in the lush coffee plantations of Coorg, or bask on the unspoiled beaches of Gokarna. Savor the flavors of Karnataka's cuisine, from spicy Bisi Bele Bath to sweet Mysore Pak. Experience the serene beauty of the Western Ghats, the wildlife of Bandipur and Nagarhole, and the cosmopolitan energy of Bangalore. With its blend of natural beauty and cultural richness, every corner of Karnataka invites discovery and delight. Embrace the captivating charm of Karnataka, where history and nature create an unforgettable journey.                                  </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsKarnataka/>
            <KarnatakaCardSlider
                title="Best Selling Karnataka Tour Packages"
                slides={KarnatakaSlidesData}
            />
        </>
    );
}

export default Karnataka;
