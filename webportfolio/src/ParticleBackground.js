import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function ParticleBackground({ colorTheme }) {
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
            color: colorTheme.colors.lightTeal,
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              resize: true
            }, 
          },
          particles: {
            color: {
              value: colorTheme.colors.dark
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 70
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
              type: 'circle'
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1
              },
              value: 2
            },
            move: {
              enable: true,
              speed: 0.35
            },
            links: {
              enable: true,
              distance: 180,
              color: 'random'
            }
          }
      }} />
    </>
  )
}

export default ParticleBackground