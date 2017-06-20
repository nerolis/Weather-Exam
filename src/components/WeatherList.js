// Modules
import React from 'react';
import { connect } from 'react-redux';
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
// Actions
import removeCity  from '../Actions/removeCity';
// Components
import WeatherCity from './WeatherCity';
import { Message } from 'semantic-ui-react';
class WeatherList extends React.Component {
     
     ifCityListisEmpty() {
     if (this.props.weather.length === 0) {
       return (
        <Message> <FormattedMessage id={ 'City.List.isEmpty' } defaultMessage={ 'City list is empty.' } /> </Message> )
     }
    }
    
    render() {
     const {weather, removeCity} = this.props
        return( <div className=''> 
        {this.ifCityListisEmpty()}
        {weather.map(weather => <WeatherCity weather={weather} key={weather.id} removeCity={removeCity}  />)} </div> )
    }
 }

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    };
};
export default injectIntl(connect(mapStateToProps, {removeCity})(WeatherList));