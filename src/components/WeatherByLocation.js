// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { FormattedDate, FormattedRelative } from 'react-intl'
// Components
import WeatherByLocationView from './WeatherByLocationView';
// Actions
import fetchLocation from '../Actions/locationAction';

class WeatherByLocation extends React.Component {
    componentWillMount() {
      this.getLocation()
    }
    
    getLocation() {
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        this.geoLocationSucces, 
        this.geoLocationError, 
      );
   }; 
}
   geoLocationError = (error) => {
     if (error) return <Segment negative >Something went wrong with geolocation </Segment>  }

   geoLocationSucces = (position, lang) => {
    const { coords } = position;
    lang = navigator.language;
    this.props.fetchLocation(coords.latitude, coords.longitude, lang)
  }
     render() {
       const { location } = this.props
          return ( 
            <div> 
            {this.geoLocationError()}
            {this.props.location.map(location => <WeatherByLocationView location={location} key={location.id} />)} 
            </div> )
  }  
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    };
};
export default injectIntl(connect(mapStateToProps, {fetchLocation})(WeatherByLocation));