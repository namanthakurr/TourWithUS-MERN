import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { KeralaSlidesData } from '../Rajasthan/SlidesData';
 import CardsKeral from './CardsKeral';
import KeralCardSlider from './KeralCardSlide'

gsap.registerPlugin(ScrollTrigger);

function  Keral() {
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
                    <source src="/videos/Keralvideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Kerala</h1>
                    <p>- Serenity Unveiled</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/Keralsymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Kerala Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Kerala, the Enchanting Backwater Paradise, is a stunning blend of tranquility, nature, and culture. Renowned for its serene backwaters, lush greenery, and pristine beaches, this state offers a unique tapestry of experiences. Explore the tranquil houseboat cruises on the backwaters of Alleppey, bask in the beauty of Kovalam and Varkala Beaches, and delve into the rich heritage of ancient temples and spice plantations. The influence of various cultures is evident in the architecture and culinary delights, from flavorful Kerala Sadya to fresh seafood. Nature lovers will be captivated by the misty hills of Munnar and the picturesque Athirappilly Falls. Immerse yourself in vibrant festivals and the unique traditions of this coastal gem. Come, experience Kerala, where natural beauty, rich culture, and relaxation come together to offer an unforgettable retreat.                            </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Kerala is a serene sanctuary that captivates with its lush landscapes and rich cultural heritage. Glide through the tranquil backwaters of Alleppey, explore the spice-scented hills of Munnar, and unwind on the pristine shores of Kovalam and Varkala. Discover the traditional charm of ancient temples and savor the vibrant flavors of Kerala cuisine, from fragrant curries to fresh seafood. Experience the enchanting beauty of Athirappilly Falls and the lush greenery of the Western Ghats. With its blend of natural wonders and cultural richness, every corner of Kerala invites relaxation and exploration. Embrace the harmonious allure of Kerala, where nature and tradition create an unforgettable escape.                                  </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div> 
                </div>
            </center>
            <CardsKeral/>
            <KeralCardSlider
                title="Best Selling Kerala Tour Packages"
                slides={KeralaSlidesData}
            />
        </>
    );
}

export default Keral;
