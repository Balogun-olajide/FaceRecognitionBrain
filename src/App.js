import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo  from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import axios from 'axios';
import './App.css';


class App extends Component {
   constructor() {
    super(); 
    this.state = { 
      input: '',
    }
   }
   
  onInputChange = (event) => {
    console.log(event.target.value);
   };

   onButtonSubmit = () => {
    const apiKey = 'e5a1a47cf9224ee6936e503ce77d1a5d';
    const imageUrl = this.state.input;
  
    axios.post('https://api.clarifai.com/v2/models/{MODEL_ID}/outputs', {
      inputs: [
        {
          data: {
            image: {
              url: imageUrl,
            },
          },
        },
      ],
    }, {
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  }
  
  render() {    
  return (
    
    <div className="App">
      <Navigation />
      <Logo />
      <Rank /> 
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <ParticlesBg   type="circle" bg={true}/> 
     {/* <FaceRecognition /> */}
    </div>
  );
}
}

export default App;