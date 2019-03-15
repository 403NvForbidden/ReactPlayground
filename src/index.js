 import React from 'react';
 import ReactDOM from 'react-dom'
import { timingSafeEqual } from 'crypto';
import SeasonDisplay from './SeasonDisplay.js'
 import Spinner from './Spinner'

// class based not funcitonal based 
 class App extends React.Component {

     //  initialize state
     // constructor(props) {
     //     super(props);
     //     this.state = { lat: null, errorMessage: '' };
     // }
     state = {lat: null, errorMessage: ''};

     componentDidMount() {
         console.log('My component was rendered to the screen');
         window.navigator.geolocation.getCurrentPosition(
             position => this.setState({lat: position.coords.latitude}),
             err => this.setState({errorMessage: err.message})
         );
     }

     // real-time updated components
     componentDidUpdate() {
         console.log('My component was just udpated - it rendered!');
     }

     renderContent() {
         if (this.state.errorMessage && !this.state.lat) {
             return <div>Error: {this.state.errorMessage}</div>

         } else if (!this.state.errorMessage && this.state.lat) {
             return <SeasonDisplay lat={this.state.lat}/>
         }
         return <Spinner message="PLease accept request"/>;
     }


     render() {
         return (
             <div>
                 {this.renderContent()}
             </div>
         )
     }
 }
 ReactDOM.render(<App />, document.querySelector('#root'));