import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'


const Logo = () => {
  return(
    <div className='ma4 mt0'>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={400}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="12px"
        className='Tilt'
      >
        <div className='Tilt-inner pa3'>
          <img src={brain} alt='logo'></img>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;