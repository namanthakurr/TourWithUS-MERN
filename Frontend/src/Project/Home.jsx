import React from 'react'
import Mountain from '../video/Mountain.mp4';
import Slider1 from "./Slider1.js";
import Destination from "./Destination.js";
// import Vacation from "./Vacation.js";
import Youtube from "./Youtube.js";
import Packages from "./Packages.js";
import SignUpForm from "./SignUpForm.js";
import Review from "./Review.js";
import Dialogue from './Dialogue.js';
const Home = () => {
  return (
    <div>
      <div className='video-container'>

        <video src={Mountain} autoPlay loop muted className='video0' />

        <div className='text-overlay'>
          <h1 className='overlay-text'>
            Tour With US
          </h1>
          <p className='India'>Incredible India</p>
        </div>


      </div>
      <div className="india-intro">
        <h2>Discover the Magic of Incredible India</h2>
        <p>Discover the magic of <span>Incredible India</span>,
          a land where ancient traditions and modern marvels coexist in harmony.
          From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India's
          diverse landscapes offer something for every traveler. Explore the rich cultural heritage in cities like Delhi, Jaipur,
          and Varanasi, where history comes alive in vibrant festivals and timeless monuments.
          Savor the diverse cuisine, from spicy street food to royal delicacies, reflecting India's culinary depth.
          Wander through bustling markets, tranquil temples, and lush national parks teeming with wildlife. Whether you seek adventure,
          spirituality, or relaxation, India promises an unforgettable journey. Embrace the warmth of its people and
          the richness of its traditions. Come, experience the unparalleled beauty and vibrant spirit of <span>Incredible India</span>!</p>
      </div>


      <Slider1 />
      <Destination />
      <Dialogue />
      {/* <Vacation /> */}
      <Packages />
      <Youtube />
      <Review />
      <SignUpForm />

    </div>
  )
}

export default Home
