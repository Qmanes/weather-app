import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';
const cities = [
  "Caracas,ve",
  "Bogota, col",
  "Madrid,es",
  "Lima, pe",
  "Washington,us"
]


class App extends Component {
  render() {
    return (
      <div className="App">
       <LocationList cities = {cities}/>
      </div>
    );
  }
}

export default App;
