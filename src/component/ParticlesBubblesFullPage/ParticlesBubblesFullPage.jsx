import Particles from "react-tsparticles";
import './style/ParticlesBubblesFullPage.css'

const ParticlesBubblesFullPage = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (<>

<div id="bon"></div>
<div id="bounce1" class="bounce rectangle">
  <h1></h1>
</div>


    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onDiv: [
              {
                enable: true,
                selectors: ".bounce.rectangle",
                mode: "destroy",
                type: "rectangle"
              },
              {
                enable: true,
                selectors: ".bounce.circle",
                mode: "bounce",
                type: "circle"
              }
            ],
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 6,
              color: "#000000"
            },
            grab: {
              distance: 4000,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            },
            repulse: {
              distance: -400,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#1F5F72"
          },
          move: {
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            },
            gravity: {
              enable: false
            },
            bounce: false,
            direction: "bottom",
            enable: true,
            outModes: {
              default: "bounce",
              top: "destroy",
              bottom:"none "
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 0
          },
          opacity: {
            anim: {
              enable: false,
              opacity_min: 0.1,
              speed: 1,
              sync: false
            },
            random: false,
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            anim: {
              enable: false,
              size_min: 0.1,
              speed: 40,
              sync: false
            },
            random: { enable: true, minimumValue: 5 },
            value: 10
          }
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5
          },
          move: {
            radius: 10
          },
          scale: 1,
          type: "none",
          url: ""
        },
        retina_detect: true,
        emitters: [
          {
            direction: "top",
            position: {
              x: 50,
              y: 100
            },
            size: {
              width: 100,
              height: 0
            },
            rate: {
              quantity: .2,
              delay: .1
            }
          }
        ]
      }}
    />
    </>
  );
};
export default ParticlesBubblesFullPage
