import React from 'react';
import { connect } from 'react-redux';
import WeatherCity from './WeatherCity';
import removeCity from '../Actions/test';
import weatherDegree from '../Actions/weatherAction';
import {Button} from 'semantic-ui-react';   
import {intlShape, injectIntl, defineMessages, FormattedMessage} from 'react-intl';
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
export default injectIntl(connect(mapStateToProps, {removeCity, weatherDegree})(WeatherList));