import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { LadakhSlidesData } from '../../Rajasthan/SlidesData';
import LadakhCardSlider from './LadakhCardSlider';
import CardsLadakh from './CardsLadakh';

gsap.registerPlugin(ScrollTrigger);

function Ladakh() {
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
                    <source src="/videos/LADAKH-video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Ladakh</h1>
                    <p>- The Land of High Passes</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Ladakh_img/LadakhTourism.jpg" alt="Ladakh-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Ladakh Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                A surreal landscape surrounded by the sky-piercing peaks of the snow-capped Himalayan, Zanskar and Karakoram ranges, and adorned with crystal waters of the Shyok, Zanskar and Indus rivers, Ladakh is one of the coldest deserts in the world. Perched at a height of over 11,000 ft above sea level, it is a haven of adventure sports. Its rugged terrain and gushing rivers provide ripe opportunities for activities like trekking, river rafting, camping, mountain climbing and biking. As the winter months approach, the Union Territory is enveloped in a blanket of snow, making it a paradisiacal setting for winter sports. The renowned Chadar Trek starts from the village of Chilling, 66 km away, and mostly covers the frozen area of River Zanskar. Throughout the adventure, trekkers are walking on precarious icy formations, staying in caves filled with stalactites and stalagmites and encountering other snowy landscape.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    Ladakh boasts three gorgeous high-altitude lakes, Tso Moriri, Tso Kar and Pangong Tso that look like sapphires embedded in the ground. A natural wonder that leaves tourists in awe is the Magnetic Hill. It is said to defy gravity as it tends to pull vehicles upwards. Ladakh is a prominent Buddhist centre and is dotted with several important monasteries. Tourists can set on a monastery trail and admire the ancient cultures of the region come alive in various paintings adorning the walls while indulging in meditation and other therapeutic and spiritual activities.
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
            <CardsLadakh />
            <LadakhCardSlider
                title="Best Selling Ladakh Tour Packages"
                slides={LadakhSlidesData}
            />
        </>
    );
}

export default Ladakh;
