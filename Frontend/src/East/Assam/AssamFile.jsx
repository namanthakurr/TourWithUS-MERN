import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import CardsAssam from './CardsAssam';
import AssamCardSlider from './AssamCardSlider';
import { AssamSlidesData } from '../../Rajasthan/SlidesData';

gsap.registerPlugin(ScrollTrigger);

function AssamFile() {
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
                    <source src="/videos/ASSAM-Video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Assam</h1>
                    <p>- Land of Tea and Wildlife</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px', }} src="/images/Assam_img/Assam_logo.jpg" alt="Assam-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Assam Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                From wildlife tours and adventures to historical treasures and river cruises - the beautiful state of Assam is sure to keep you enthralled!
                                <br />Assam Widely known as a travellers' paradise and a popular destination for a honeymoon, Assam has made it to the bucket lists of almost all travellers. Booking an Assam tour package for your next vacation comes with the opportunity to immerse yourself in a heady mix of history, culture, serenity, and the warmth of the populace. The destination is replete with natural beauty, vibrant culture, and enchanting sights that will leave you in awe, helping create a mesmerising experience and memories for a lifetime. A tour of Assam has so much to offer for all kinds of visitors that it guarantees satisfaction, even for the most discerning of travellers.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                Assam tourism offers places to visit like historical monuments, temples and sightseeing places like kamakhya Temple, Umananda Temple, Dipor Bil, Madan Kamdev, Rang Ghar, Agnigarh. For nature lovers, Assam has national parks like Kaziranga National Park, Pobitora Wildlife Sanctuary, Manas National Park, shelter the endangered one-horned rhino, Asiatic elephant, Bengal tiger, gaur and many other fascinating species
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
            <CardsAssam />
            <AssamCardSlider
                title="Best Selling Assam Tour Packages"
                slides={AssamSlidesData}
            />
        </>
    );
}

export default AssamFile;
