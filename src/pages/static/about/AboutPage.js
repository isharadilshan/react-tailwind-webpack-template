import React from 'react';
import AnimatedBackground from '../../../components/background/AnimatedBackground';

const AboutPage = () => {
  return (
    <>
      <div
        className='test-class'
        style={{color: 'white', zIndex: '100', height: '300px', width: '300px'}}
      >
        {'This is Profile View Page'}
      </div>
      <AnimatedBackground />
    </>
  );
};

export default AboutPage;
