import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo  from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import './App.css';

class App extends Component {
  render() {    
  return (
    
    <div className="App">
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm />
      <ParticleBackground /> 
     {/* <FaceRecognition /> */}
    </div>
  );
}
}

export default App;
