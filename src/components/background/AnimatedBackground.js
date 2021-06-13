import React from 'react';
import Particles from 'react-tsparticles';

const AnimatedBackground = () => {
  return (
    <div className='animation-wrapper'>
      <Particles
        id='tsparticles'
        init={() => {}}
        loaded={() => {}}
        options={{
          fps_limit: 60,
          background: {
            color: '#0F172A',
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              ondiv: {
                enable: true,
                elementId: 'login',
                mode: 'bubble',
                type: 'triangle',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
                speed: 3,
                color: ['#ff0000', '#bb99ff'],
              },
            },
          },
          particles: {
            color: {
              value: ['#99ff99', '#1254ef', '#ff0000'],
            },
            links: {
              color: 'random',
              distance: 160,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              collisions: true,
              direction: 'none',
              enable: true,
              out_mode: 'bounce',
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            shape: {
              type: 'square',
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 2,
                speed: 0.5,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 3,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
