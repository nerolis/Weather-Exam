// Modules
import React from 'react';
import { connect } from 'react-redux';
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
// Actions
import removeCity  from '../Actions/removeCity';
// Components
import WeatherCity from './WeatherCity';
class WeatherList extends React.Component {
    render() {
     const {weather, removeCity} = this.props
        return( <div> {weather.map(weather => <WeatherCity weather={weather} key={weather.id} removeCity={removeCity}  />)} </div> )
    }
 }

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    };
};
export default injectIntl(connect(mapStateToProps, {removeCity})(WeatherList));