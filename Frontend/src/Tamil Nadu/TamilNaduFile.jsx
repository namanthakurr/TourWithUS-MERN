import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


import { TamilNaduSlidesData } from '../Rajasthan/SlidesData';
import CardsTamilNadu from './CardsTamilNadu';
import TNCardSlider from './TNCardSlider';


gsap.registerPlugin(ScrollTrigger);

function TamilNaduFile() {
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
                    <source src="/videos/TamilNadu-video (online-video-cutter.com).mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Tamil Nadu</h1>
                    <p>-  The Land of Temples </p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/TamilNadu_img/TamilNadu_logo.jpg" alt="Tamil Nadu-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Tamil Nadu Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                Tamil Nadu is the southern-most state in India, and there is so much to experience in this land of beauty and history that the popularity of tourism in Tamil Nadu is rather self-explanatory. Each experience that Tamil Nadu Tourism has to offer is unique in its own way, right from the culture to the cuisine and the traditions of the region. From mountains to beaches, Tamil Nadu Tourism has it all! With stunning golden beaches stretching across the state of Tamil Nadu, and a massive part of the towering eastern ghats of India being housed here, Tamil Nadu vacation packages are truly suitable for all kinds of travelers.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    Tamil Nadu Tourism lets you explore the longest beach in India, Marina Beach, and the Nilgiri ranges that offer some of the most breath-taking views. Even witnessing the southern-most point of the Indian subcontinent makes for a major component of Tamil Nadu Tourism. Besides the abundant natural beauty, with a cost-effectively priced Tamil Nadu travel package, you can experience a land that is rich in heritage, which has been a part of the regional culture for several centuries. The numerous temples and religious destinations that you can explore with your Tamil Nadu holiday packages provide a window into the legendary history of the region.
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
            <CardsTamilNadu />
            <TNCardSlider
                title="Best Selling Tamil Nadu Tour Packages"
                slides={TamilNaduSlidesData}
            />
        </>
    );
}

export default TamilNaduFile;
