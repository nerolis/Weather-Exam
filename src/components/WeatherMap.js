import React from 'react';
import GoogleMapReact from 'google-map-react';
import { main } from './main.scss';
import { Icon, Message } from 'semantic-ui-react';
import {FormattedMessage } from 'react-intl';
const AdditionalWeatherInfo = ({ weather, speed, humidity}) => <Icon name='marker' size='big' color='black'>
                        <p>
                        <FormattedMessage
                        id={ 'Map.Speed' }
                        defaultMessage={ 'Wind:' } />{speed}, 
                        <FormattedMessage
                        id={ 'Map.Humidity' }
                        defaultMessage={ 'Humidity:' }/>{humidity}%
                        </p>
                        </Icon>;


class WeatherMap extends React.Component {
  render() {
    const { weather } = this.props;
    return (
     <div className='map' >
      <GoogleMapReact
      center={{lat: weather.coord.lat, lng: weather.coord.lon}} 
      zoom={10}
      >
      <AdditionalWeatherInfo
          lat={weather.coord.lat}
          lng={weather.coord.lon}
          speed={weather.wind.speed}
          humidity={weather.main.humidity}
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default WeatherMap;