import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function ParticleBackground() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id='particles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { 
            enable: false,
            zIndex: 0
          },
          background: {
            color: '#66fcf1',
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true
            }, 
          },
          particles: {
            color: {
              value: '#0b0c10'
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 100
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.25,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: 'square'
            },
            size: {
              random: {
                enable: true,
                minimumValue: 3
              },
              value: 2
            },
            move: {
              enable: true,
              speed: 0.5
            },
            links: {
              enable: true,
              distance: 80,
              color: 'random'
            }
          }
      }} />
    </>
  )
}

export default ParticleBackground