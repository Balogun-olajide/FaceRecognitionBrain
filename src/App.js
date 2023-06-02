import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo  from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <div> 
      <Particles
           className= 'particles'
           id="tsparticles"
           init={particlesInit}
           loaded={particlesLoaded}
           options={{
               background: {
                   color: {
                       value: "#0000000",
                   },
               },
               fpsLimit: 60,
               interactivity: {
                   events: {
                       onClick: {
                           enable: true,
                           mode: "push",
                       },
                       onHover: {
                           enable: true,
                           mode: "repulse",
                       },
                       resize: true,
                   },
                   modes: {
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
                       value: "#ffffff",
                   },
                   links: {
                       color: "#ffffff",
                       distance: 150,
                       enable: true,
                       opacity: 0.5,
                       width: 1,
                   },
                   collisions: {
                       enable: true,
                   },
                   move: {
                           directions: "none",
                           enable: true,
                           outModes: {
                               default: "bounce",
                           },
                           random: false,
                           speed: 3,
                           straight: false,
                       },
                   number: {
                       density: {
                           enable: true,
                           area: 800,
                       },
                       value: 80,
                   },
                   opacity: {
                       value: 0.5,
                   },
                   shape: {
                       type: "circle",
                   },
                   size: {
                       value: { min: 1, max: 5 },
                   },
               },
               detectRetina: true,
           }}
       />
    </div>
   );
}



class App extends Component {
   constructor() {
    super(); 
    this.state = { 
      input: '',
    }
   }
   
  onInputChange = (event) => {
    console.log(event.target.value);
  }

   onButtonSubmit = () => {
    console.log('click');
   }
  render() {    
  return (
    
    <div className="App">
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <ParticleBackground />  
     {/* <FaceRecognition /> */}
    </div>
  );
}
}

export default App;
