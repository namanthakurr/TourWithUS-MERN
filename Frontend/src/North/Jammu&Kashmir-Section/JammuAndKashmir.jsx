import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { JammuAndKashmirSlidesData } from '../../Rajasthan/SlidesData';
import CardsJammuKashmir from './CardsJammuKashmir';
import JKCardSlider from './JKCardSlider';

gsap.registerPlugin(ScrollTrigger);

function JammuAndKashmir() {
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
                    <source src="/videos/Kashmir-video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Jammu and Kashmir</h1>
                    <p>- The Heaven on Earth</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{paddingRight:'50px'}} src="/images/J&K_img/kashmir-tourism.jpg" alt="J&K-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Jammu and Kashmir Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                The Union Territory of Jammu and Kashmir is a great tourist destination. Picturesque and enchanting, Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty. Surrounded by mountain peaks, lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens, it has inspired poets through centuries. Kashmir is crisscrossed by chinar tree-lined roads and quaint wooden bridges; and is home to bustling bazaars, sufi shrines and forts. Add to this, the charms of flavourful Kashmiri cuisine and apples and walnuts from the lush orchards surrounding it.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    In winter, Kashmir takes on a white glow, covered in soft snow and skiers making a beeline for its famous slopes. And in summer, as the snow melts, and the flowers in the meadows bloom, it resembles an artist's canvas.
                                    Meanwhile, Jammu lies on the banks of the pristine Tapi river. It is dotted with hundreds of temples. From the popular Hindu pilgrimage of Vaishno Devi, which is located nearby, to scores of religious structures set in picturesque surroundings, Jammu is the ideal site to set on a temple trail and soak in spiritual vibes.
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
            <CardsJammuKashmir />
            <JKCardSlider
                title="Best Selling Jammu and Kashmir Tour Packages"
                slides={JammuAndKashmirSlidesData}
            />
        </>
    );
}

export default JammuAndKashmir;
