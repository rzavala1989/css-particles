import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const LeavesParticles = (props) => {
  const { className } = props;
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'out',
          random: false,
          speed: 2,
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
          value: 0.5,
        },
        shape: {
          type: 'image',
          image: {
            src: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-pro-react/leaves.png',
            width: 100,
            height: 100,
          },
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }),
    []
  );

  const init = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <Particles
      className={className}
      id='tsparticles'
      options={options}
      init={init}
    />
  );
};
