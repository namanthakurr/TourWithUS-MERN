import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { UttarakhandSlidesData } from '../../Rajasthan/SlidesData';

import UttarakhandCardSlider from '../Uttarakhand/UttarakhandCardSlider'
import CardsUttarakhand from './CardsUttarakhand';

gsap.registerPlugin(ScrollTrigger);

function Uttarakhand() {
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
                    <source src="/videos/Uttarakhand-video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Uttarakhand</h1>
                    <p>- Devbhumi (Land of the Gods)</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/Uttarakhand_img/uttrakhand.jpg" alt="Uttarakhand-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Uttarakhand Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                Devbhoomi Uttarakhand is the state in India one can easily fall in love with. The surreal landscape that comprises lofty Himalayas, glistening streams, eye-catching meadows, imposing glaciers and surreal lakes, all make Uttarakhand a coveted tourist destination in Indian Himalayas. The state is divided into two regions: Garhwal and Kumaon. Each of these offers plenty of opportunities for tourism, sightseeing, adventure and wildlife. Dotted with sacred Hindu temples and trekking trails, this North Indian state is a travel destination where along with seeking the blessing of the Almighty, one can indulge in adventure and recreational activities.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    In addition to featuring multiple holy temples and boasting of mesmerizing natural beauty, the pleasant weather conditions and adventure sports opportunities available in the state make the Uttarakhand trip an ideal way to spend a vacation. This destination has something to offer for all types of travellers. While pilgrims can book a Uttarakhand sightseeing tour to offer their prayers at the char dhams located here, young and adventurous individuals can indulge in river rafting, trekking, or skiing during their Uttarakhand vacation packages.
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
            <CardsUttarakhand />
            <UttarakhandCardSlider
                title="Best Selling Uttarakhand Tour Packages"
                slides={UttarakhandSlidesData}
            />
        </>
    );
}

export default Uttarakhand;
