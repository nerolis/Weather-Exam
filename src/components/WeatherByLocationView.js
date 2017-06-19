   // Modules
import React from 'react';
import {connect} from 'react-redux';
// Components
import {Segment, Statistic, Image, Checkbox, Card, Label, Icon, Button} from 'semantic-ui-react'
// Actions
import fetchLocation from '../Actions/locationAction';
import {FormattedDate, FormattedRelative} from 'react-intl'
import {intlShape, injectIntl, defineMessages, FormattedMessage} from 'react-intl'; 
   class Main extends React.Component {
  constructor() {
    super()
    this.state = {KelvinTo: true} 
} 
    toggle = () => this.setState({ KelvinTo: !this.state.KelvinTo })
    render() {
    const {location} = this.props
    const {KelvinTo} = this.state
    
     return(
        <Segment.Group>
            <Segment.Group>
            <Segment  as='h1'>{location.name}</Segment>
            <Segment basic> 
             <Button  inverted size='small'  onClick={this.toggle}>{KelvinTo ? ` °C ${location.main.temp.toFixed(0) - 273}` : `°F ${Math.round(location.main.temp*9/5-460)}`}</Button>
            </Segment>
            <Segment basic>
           <Icon name='time'/><FormattedRelative value={location.dt*1000}/> 
            </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                <Segment>
                 <Image  label={{ color: 'blue', content: location.weather[0].description }} src={`http://openweathermap.org/img/w/${location.weather[0].icon}.png`} size='small' /></Segment>
                    <Segment>    
                        <FormattedDate
                            value={new Date(location.dt*1000)}
                            year='numeric'
                            month='long'
                            day='2-digit'
                            />
                            </Segment>
                            </Segment.Group>
                                </Segment.Group>

    )}
 }  
export default injectIntl(connect(null, {fetchLocation})(Main));