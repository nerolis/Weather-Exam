import React from 'react';
import { connect } from 'react-redux';
import WeatherCity from './WeatherCity';
import removeCity from '../Actions/test';
class WeatherList extends React.Component {

    
    render() {
    const {weather, removeCity} = this.props
        return(
            <div>
            {weather.map(weather => <WeatherCity weather={weather} key={weather.id} removeCity={removeCity}  />)}
            </div>

  )}
 }
const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    };
};
export default connect(mapStateToProps, {removeCity})(WeatherList);