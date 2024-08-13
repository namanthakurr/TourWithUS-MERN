import React from 'react';
 

const Dialogue = () => {
  return (
    <div className="dialogue-container">
      <div className="dialogue-content">
       
            <span className='Dialogue-heading'>Travel Far, Dream Big</span>
             
        <div className="images-container">
          <div className="left-images">
            <img
              src='bunny.jpg'
              alt='not available'
              className="dialogue-image"
            />
            <img
              src='dil.jpg'
              alt='not available'
              className="dialogue-image"
            />
            <img
              src='gogoa.jpg'
              alt='not available'
              className="dialogue-image"
            />
            <img
              src='jordan.jpg'
              alt='not available'
              className="dialogue-image"
            />
          </div>
          <div className="right-image-container">
            <img
              src='BunnyPro.jpg'
              alt='not available'
              className="right-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue;
