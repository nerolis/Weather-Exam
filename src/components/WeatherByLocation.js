// Modules
import React from 'react';
import {connect} from 'react-redux';
// Components
import {Segment, Statistic, Image, Checkbox, Card, Label, Icon, Button} from 'semantic-ui-react'
import WeatherByLocationView from './WeatherByLocationView';
// Actions
import fetchLocation from '../Actions/locationAction';
import {FormattedDate, FormattedRelative} from 'react-intl'
import {intlShape, injectIntl, defineMessages, FormattedMessage} from 'react-intl';
class Main extends React.Component {
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
     if (error) {
     return <Segment>Error, something went wrong</Segment>
    };
  }

   geoLocationSucces = (position) => {
    const { coords } = position;
    this.props.fetchLocation(coords.latitude, coords.longitude)
    ;}
    
    
     render() {
       const { location } = this.props
         return (
         <div>
         {this.props.location.map(location => <WeatherByLocationView location={location} key={location.id} />)} 
         </div>
         )
  }  
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    };
};
export default injectIntl(connect(mapStateToProps, {fetchLocation})(Main));