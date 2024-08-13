import React from 'react';
import celebrity from "../video/celebrity.mp4"; 
import Happy from"../video/Happy.mp4"

function Youtube() {
  return (

   <div className='main'> <div className='Shriya'>
   <div className='Hansika'>
     <div className='mini-shriya'>
       <video src={celebrity} autoPlay muted loop  className='wow'/>
     </div>
     <div className='mini-hansika'>
       <p>SHARE YOUR  EXCITING EXPIERENCE  HERE</p>
     
        <video src={Happy} autoPlay muted loop className='Happy'/>

        <input placeholder='Share Here' className='inputt'/>
 
     </div>
   </div>
 </div></div>
  );
}

export default Youtube;
