// Modules
import React from 'react';
import {connect} from 'react-redux';
// Components
import {Segment, Statistic, Image} from 'semantic-ui-react'
import {FormattedTime} from 'react-intl';
// Actions
import fetchLocation from '../Actions/locationAction';
class Main extends React.Component {
  constructor() {
    super()
    this.state = { unreadCount: 1000, name: 'Elric'}
    
  }
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
     console.log('error')
    };
  }
   geoLocationSucces = (position) => {
    const { coords } = position;
    this.props.fetchLocation(coords.latitude, coords.longitude)
    ;}
    renderGeoLocation(location) {
      return(
        
        <Segment key={location.id} inverted>
     
        <Segment compact inverted color='teal'>{location.name}</Segment>
        <Statistic inverted label='Temp' value={`°${location.main.temp}`} />
         <Image src={`http://openweathermap.org/img/w/${location.weather[0].icon}.png`} size='small' />
        <Statistic inverted color='blue' value={location.weather[0].description} />
         <Segment inverted><FormattedTime value={new Date(location.dt)}/></Segment>
        </Segment>
        )
    }
    render() {
                const {name, unreadCount} = this.state;
    return(
        <div>
        {this.props.location.map(this.renderGeoLocation)}
        </div>
        )}

}
const mapStateToProps = (state) => {
    return {
        location: state.location
    };
};
export default connect(mapStateToProps, {fetchLocation})(Main);