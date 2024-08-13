import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  styles from '../Rajasthan/Rajasthan.module.css'
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const UpCardSlider = ({ title, slides }) => {
  useEffect(() => {
    const heading = document.getElementById('heading');

    // Create an infinite looping animation
    gsap.to(heading, {
      x: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className='container'>
      <section className={styles.Slidercontainer}>
        <div className={styles.Tourtitle}>
          <h1 id="heading" className={styles.heading}>{title}</h1>
        </div>
        <div className={styles.swiperButtonPrev}>
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </div>
        <div className={styles.swiperButtonNext}>
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
        <div className={styles.swiperPagination}></div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          pagination={{
            el: `.${styles.swiperPagination}`,
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          spaceBetween={50}
          grabCursor={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 3,
            },
          }}
          className={styles.card__content}
        >
          {slides && slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.card__article}>
              <div className={styles.card__image}>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className={styles.card__img}
                />
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>{slide.title}</h3>
                <p className={styles.card__description}>
                  {slide.description}
                </p>
                {/* <a href={slide.link} className={styles.card__button}>
                  View More
                </a> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.BookTour}>
          <button>Explore Now</button>
        </div>
      </section>
    </div>
  );
};

UpCardSlider.propTypes = {
  title: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UpCardSlider;
