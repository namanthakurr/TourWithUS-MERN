import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from '../../Rajasthan/Rajasthan.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { HimachalPradeshSlidesData } from '../../Rajasthan/SlidesData';
import CardsHimachalPradesh from './CardsHimachalPradesh';
import HPCardSlider from './HPCardSlider';

gsap.registerPlugin(ScrollTrigger);

function HimachalPradesh() {
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
                    <source src="/videos/Manali-Video.mp4" type="video/mp4" />
                </video>
                <div className={styles.homeContent}>
                    <h1>Himachal Pradesh</h1>
                    <p>- Land of Mountains</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img style={{ paddingRight: '50px',paddingTop:'-40px'}} src="/images/HimachalPradesh_img/HimachalPradesh-Logo.png" alt="HimachalPradesh-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Himachal Pradesh Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                Himachal Pradesh is among the most visited top mountain tourist places in North India, Himalayas region. It gifts you with memories that last for a lifetime. Valleys, mountains, ancient monasteries, historical sites, lakes, mountain passes! - The list never ends. The wanderlust in you will be compelled to stay here forever. Pick up any Himachal travel guide, chances are, you will be hooked on to its beauty within a few minutes.Himachal is very popular for its national parks. These are home to rare and endangered animals. The most famous of these is Great Himalayan National Park, a UNESCO World Heritage Site. You can spot high altitude Himalayan animals like Himalayan Tahr, Himalayan Brown Bear, blue sheep and snow leopard. The vast floral and faunal you can spot the exotic Himalayan wildlife are Pin Valley & Inderkilla. This state has so much to offer. Indeed, it's a top tourist attraction in North India!
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    Himachal Pradesh tourism has something in store for nature lovers. Its beauty lies in its diversity. You have lush valleys like Kinnaur, Kullu and Kangra & barren terrains of Lahaul & Spiti. Tales of Malana fascinate tourists as much as the Buddhist culture in Mcleodganj. Exploring Dalhousie, with its rich colonial past, is sheer delight. The famous Hill stations like Shimla, Kullu & Manali are dotted with meadows, orchards, quaint villages & rich colonial past.
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
            <CardsHimachalPradesh />
            <HPCardSlider
                title="Best Selling Himachal Pradesh Tour Packages"
                slides={HimachalPradeshSlidesData}
            />
        </>
    );
}

export default HimachalPradesh;
