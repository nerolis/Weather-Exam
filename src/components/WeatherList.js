// Modules
import React from 'react';
import { connect } from 'react-redux';
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
// Actions
import { updateCity, removeCity }  from '../Actions/weatherAction';
// Components
import WeatherCity from './WeatherCity';
import { Message } from 'semantic-ui-react';
import WeatherSearch from './WeatherSearch'
class WeatherList extends React.Component {
    render() { 
    const { weather, removeCity, updateCity } = this.props
       if (weather.length === 0 ) return <div> <Message><FormattedMessage id={ 'City.List.isEmpty' } defaultMessage={ 'List is empty' }/></Message>
          <WeatherSearch /> </div>
       else return  <div>{weather.map(weather => <WeatherCity weather={weather} key={weather.id} removeCity={removeCity} updateCity={updateCity} />)}
       </div> 
    }
 }

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    };
};
export default injectIntl(connect(mapStateToProps, {removeCity, updateCity})(WeatherList));