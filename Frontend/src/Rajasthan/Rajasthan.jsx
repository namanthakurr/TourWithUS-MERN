import React, { useRef, useEffect } from 'react';
import { useCollapse } from 'react-collapsed';
import styles from './Rajasthan.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardsRajasthan from './CardsRajasthan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import CardSlider from './CardSlider';
import { RajasthanSlidesData } from './SlidesData';

gsap.registerPlugin(ScrollTrigger);

function Rajasthan() {
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
                    <source src="/videos/rajasthan-video.mp4" type="video/mp4"  />
                </video>
                <div className={styles.homeContent}>
                    <h1>Rajasthan</h1>
                    <p>- Lands of Kings</p>
                </div>
            </div>
            <center>
                <div className={styles.description}>
                    <div className={styles.logoAndText}>
                        <div className={styles.logoImg}>
                            <img src="/images/Rajasthan_img/RajasthanTourismLogoPng.png" alt="Rajasthan-Tourism-Logo" />
                        </div>
                        <div className={styles.text} ref={description}>
                            <h1 className={styles.mainHeading}>About Rajasthan Tourism</h1>
                            <hr className={styles.gradientLine} />
                            <p>
                                Rajasthan, the Land of Kings is synonymous to heroism, royalty and honour. Historic tales of battles fought and romance of the riches adorn the walls of the state. Established in the era marked with wartime ballads yet living in the modern period, this beautiful region is a travellers' destination. Those looking out for the remnants of the past should not pass up a trip to Rajasthan. For wanderers interested in adventures at the various landscapes should definitely get a glimpse of this venturesome state. And for the ones who plan to have a quiet sojourn gazing at the beauty of the golden sand dunes, Rajasthan tops your list. This land is a colourful melange of massive forts, stunning palaces, diverse cultures, delectable cuisines and warm people, set amidst a rugged yet inviting landscape. Come, explore the miscellany of the old and the new in Rajasthan, a glittering jewel of India.
                            </p>
                            {!isExpanded && (
                                <button className={styles.expand} {...getToggleProps()}>
                                    Read More <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em' }} />
                                </button>
                            )}
                            <section {...getCollapseProps()}>
                                <p>
                                    It is a land that has inspired lot of people. Come tread on the sands of time. In Rajasthan you will find every hue in Nature's grand palette - the red sands, the blue of royalty, the pink cities or the amber sunsets. Surrender yourself to the sounds of trinkets or the sounds of the all conquering wind. Sight and sounds that are far removed from any city. Sights and sounds that will transport you into a folk lore. Music, art and dance is woven into every inch of this land of paradise. Come, walk into the unforgettable embrace of Rajasthan.
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
            <CardsRajasthan />
            <CardSlider
                title="Best Selling Rajasthan Tour Packages"
                slides={RajasthanSlidesData}
            />
        </>
    );
}

export default Rajasthan;
