import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import  styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { UttarPradeshSlidesData } from '../Rajasthan/SlidesData';
 import CardsUp from './CardsUp';
import  UpCardSlider from './UpCardSlider'

gsap.registerPlugin(ScrollTrigger);

function  Up() {
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
                    <source src="/videos/Upvideo.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Uttar Pradesh</h1>
                    <p>-  Cultural Cradle</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/upsymbol.jpg" alt="Gujarat-Symbol" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Uttar Pradesh Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                            Uttar Pradesh, the Epicenter of Heritage, offers a captivating journey through India's rich cultural and historical legacy. This state is home to iconic landmarks like the Taj Mahal, the holy city of Varanasi, and the architectural marvels of Agra and Lucknow. Wander through the majestic forts and palaces of the Mughal era, explore the sacred Ghats of the Ganges, and experience the vibrant festivals that reflect its deep-rooted traditions. From the spiritual serenity of the Yamuna and Ganges rivers to the bustling markets of Kanpur and the serene temples of Mathura, Uttar Pradesh presents a diverse tapestry of experiences. The blend of historical grandeur and spiritual depth makes it a profound destination for history buffs and spiritual seekers alike. Come, discover Uttar Pradesh, where ancient history and spiritual richness create a journey of a lifetime.                                     </p>                      
                                                        {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>                                   
                                Uttar Pradesh is a vibrant tapestry of history and spirituality that enthralls with its monumental heritage and sacred sites. Explore the grandeur of the Taj Mahal, stroll through the ancient streets of Varanasi, and marvel at the architectural splendor of Agra and Lucknow. Discover the sacred Ghats of the Ganges, immerse yourself in the rich tapestry of local festivals, and savor the diverse flavors of regional cuisine. From the majestic forts and palaces to the serene temples and bustling markets, Uttar Pradesh offers a profound journey through India's cultural and spiritual heart. Embrace the historic charm and spiritual depth of Uttar Pradesh, where every experience is a journey into the essence of India.                                         </p>                            </section>
                            {isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read Less <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </center>
            <CardsUp/>
            <UpCardSlider
                title="Best Selling UttarPradesh Tour Packages"
                slides={UttarPradeshSlidesData}
            />
        </>
    );
}

export default Up;
