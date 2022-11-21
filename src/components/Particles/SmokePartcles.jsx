import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'; // loads tsparticles
import { useCallback, useMemo } from 'react';

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/

/* 
Example of useMemo:

const canContinue = useMemo(() => {
  if there are no errors in Step 1 of form,
  if there are no errors in Step 2 of form,
  if there are no errors in Step 3 of form,
  if there are no errors in Step 4 of form,
  return !isError && !isLoading;
}, [isError, isLoading]);
*/

const SmokeParticles = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        image:
          'url("https://raw.githubusercontent.com/luorixo/portfolio/main/client/src/assets/Images/background3.JPG")',
        size: 'cover', // background image size
        color: '#000', // background color
        opacity: 1, // background opacity
        repeat: 'no-repeat', //  background repeat
        position: '50% 50%', // background position
      },

      fullScreen: {
        enable: true,
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false, // enables the hover event
            mode: 'repulse', // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 20, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
          density: {
            enable: true, // enables the density option
            area: 800, // area of the particles
          },
          value: 35,
        },
        shape: {
          type: 'image',
          image: {
            src: 'https://i.ibb.co/f81DDZp/cloud.png', // image source
            width: 50, // image width
            height: 40, // image height
          },
        },

        move: {
          enable: true, // enabling this will make particles move in the canvas
          direction: 'right', // direction of the particles
          random: false, // random movement
          straight: true,
          outMode: 'out', // particles will be destroyed when they reach the end of the canvas
          speed: { min: 2, max: 5 }, //Object{} using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.2, max: 0.6 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 120, max: 240 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default SmokeParticles;
