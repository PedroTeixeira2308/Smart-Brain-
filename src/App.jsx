import React, {Component} from 'react';
import Navigation  from './Components/Navigation/Navigation';
import Logo  from './Components/Logo/Logo';
import ImageLinkForm  from './Components/ImageLinkForm/ImageLinkForm';
import Rank  from './Components/Rank/Rank';
import FaceRecognition  from './Components/FaceRecognition/FaceRecognition';
import SignIn  from './Components/SignIn/SignIn';
import Register  from './Components/Register/Register';
import ParticlesBg from 'particles-bg'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false,
      clarifaiResponse: null,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const region = data?.outputs?.[0]?.data?.regions?.[0];
    if (!region) return { leftCol: 0, topRow: 0, rightCol: 0, bottomRow: 0 };

    
    const bb = region.region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
 
    return {
      leftCol: bb.left_col * width,
      topRow: bb.top_row * height,
      rightCol: width - (bb.right_col * width),
      bottomRow: height - (bb.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onClarifaiResponse = (response) => {
    this.setState({ clarifaiResponse: response }, this.maybeComputeBox);
  };

  maybeComputeBox = () => {
    const { clarifaiResponse } = this.state;
    const img = document.getElementById('inputImage');
    if (!clarifaiResponse || !img || !(img.width || img.naturalWidth)) return;

    const box = this.calculateFaceLocation(clarifaiResponse);
    this.displayFaceBox(box);
  };

  onImageLoad = () => {
    this.maybeComputeBox();
  };

  onButtonSubmit = () => {
    const imageUrl = this.state.input.trim();
    if (!imageUrl) return;

    this.setState({ imageUrl, box: {}, clarifaiResponse: null });

    fetch('http://localhost:3000/api/clarifai/face-detect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl })
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(response => {
        // console.log('Clarifai response:', response); // to see the complete result in console
        this.onClarifaiResponse(response); 
        return fetch('http://localhost:3000/image', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: this.state.user.id })
        });
      })
      .then(res => res?.ok ? res.json() : null)
      .then(count => {
        if (count != null) {
          this.setState(Object.assign(this.state.user, { entries: count }));
        }
      })
      .catch(console.error);
  };


  onRouteChange = (route) => {
    if(route === 'signOut') {
      this.setState({isSignedIn: false});
    }else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: 
      route});
  }

  render() {
    const {isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className='App'>
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? 
            <div>
              <Logo/>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange= {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl={imageUrl} onImageLoad={this.onImageLoad}/>
            </div>
          : 
            (
              route === 'signIn'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            )
            
        }
      </div>
    );
  };
}

export default App;