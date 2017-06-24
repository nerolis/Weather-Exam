import React from 'react';
import GoogleMapReact from 'google-map-react';
import { main } from './main.scss'
class WeatherMap extends React.Component {
  render() {
    const { weather } = this.props;
    return (
     <div className='map' >
      <GoogleMapReact
      center={{lat: weather.coord.lat, lng: weather.coord.lon}} 
      zoom={9}
      >
      </GoogleMapReact>
      </div>
    );
  }
}
export default WeatherMap;