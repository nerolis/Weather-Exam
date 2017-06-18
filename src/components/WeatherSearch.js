import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react'
import fetchWheater from '../Actions/weatherAction';
class WeatherSearch extends React.Component {
    constructor() {
    super()
    this.state = {isLoading: true, temp: ''};
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
};
  onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
  e.preventDefault();
  this.props.fetchWheater(this.state.temp)
};
  render() {
  const { temp } = this.state;
  const {onSubmit} = this.props;
    return(
      <Form onSubmit={this.onSubmit}>
        <Input type='text' placeholder='Search by city name' value={temp} onChange={this.onChange} name='temp' />
        <Button inverted>Execute</Button>
      </Form> 

 )};
};

export default connect(null, {fetchWheater})(WeatherSearch);