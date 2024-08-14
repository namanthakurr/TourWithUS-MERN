import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GujratSlidesData = [
  {
    image: '/images/Rajasthan_img/Heritage.jpg',
    title: 'Heritage and Culture Tour',
    description: 'Explore Gujarat heritage: temples, markets, arts, crafts, and traditions.',
    link: '/'
  },
  {
    image: '/images/Rajasthan_img/WIldlife.jpg',
    title: 'Wildlife and Nature Expedition',
    description: 'Experience Gujarat wildlife: lions, birdwatching, salt flats, and sanctuaries.',
    link: '/'
  },
  {
    image: '/images/Rajasthan_img/Spiritual.jpg',
    title: 'Spiritual Sojourn And Temples',
    description: 'Discover Gujarat spirituality: sacred temples, ashrams, peaceful retreats, ancient sites.',
    link: '/'
  },
  {
    image: '/images/Rajasthan_img/Beaches.jpg',
    title: 'Beach and Coastal Retreat',
    description: 'Embark on Gujarat Wildlife and Nature Expedition: lions, birdwatching, Rann of Kutch, and scenic landscapes await.',
    link: '/'
  },
  {
    image: '/images/Rajasthan_img/Navratri.jpg',
    title: 'Festival and Cultural',
    description: 'Celebrate Gujarat festivals: Navratri, Rann Utsav, and kites.',
    link: '/'
  },
];

function Bali() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="Bali">
        <div>
          <p>Gujarat Tour Packages</p>
          <span>
            Explore the vibrant culture, stunning landscapes, and rich heritage of Gujarat.
          </span>
        </div>
        <div>
          <button type="button">Request Call Back</button>
        </div>
      </div>

        <div className="Bali-video">
           
          {/* <video src='/videos/gujarat.mp4' autoPlay loop muted className="Bali-v" /> */}
        </div>
      <div>
        <div className="Bali-black-box">
          <div className="Bali-info">
            <div>
              IDEAL DURATION
              <br /> 7-10 nights
            </div>
            <div>
              VISA PROCESSING
              <br />
              Visa on Arrival
            </div>
            <div>
              BEST TIME
              <br />
              Oct - Mar
            </div>
            <div>
              STARTING PRICE
              <br />
              ₹12,500
            </div>
          </div>
          <div className="Bali-rating">
            OUR EXPERTISE
            <br />
            4.8 from 10k travellers
          </div>
        </div>
      </div>

      <div className="Balimainbox">
        <br />
        <br />
        <div className="BaliInfo">
          <div className="Budget">
            <div className="Budget-Info">
              <p>Budget</p>
              <input
                type="checkbox"
                value="50K"
                style={{ width: "20px", height: "20px" }}
              />
              <label> Below ₹50k </label>
              <br />
              <input
                type="checkbox"
                value="75k"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹50k - ₹75k </label>
              <br />
              <input
                type="checkbox"
                value="1lakh"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹75k - ₹1L </label>
              <br />
              <input
                type="checkbox"
                value="2laKh"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹1L - ₹1.5L </label>
              <br />
              <input
                type="checkbox"
                value="Above 2lakh"
                style={{ width: "20px", height: "20px" }}
              />
              <label>Above ₹2L </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>No of days</p>
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 3-5 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label>4-8 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 9-12 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 13-16 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label>Above 16 days </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>Hotel ratings</p>
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 5 star </label>
              <br />
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label>4 star </label>
              <br />
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 3 star </label>

              <hr />
            </div>
          </div>

          <div className="Tour-column">
            {GujratSlidesData.map((slide, index) => (
              <div className="Tour-Info" key={index}>
                <div
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                  className="Hotel"
                >
                  <div className="Hotel-Review">
                    <div className="imgg">
                      <img src={slide.image} className="Hotel-image" alt="" />
                    </div>
                    <div className="Hotel-Info">
                      <blockquote>{slide.title}</blockquote>
                      <p>{slide.description}</p>
                      <hr />
                      <div className="Bali-price">
                        <button type="button">Book Tour</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bali;
