// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Message } from 'semantic-ui-react'
import {intlShape, injectIntl, defineMessages, FormattedMessage} from 'react-intl';
// Actions
import fetchWheater from '../Actions/weatherAction';
// Components
class WeatherSearch extends React.Component {
    constructor() {
    super()
    this.state = {
      isLoading: false, 
      temp: '',
      error: {},
      invalid: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
};
      onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    };
    
        onSubmit(e) {
       e.preventDefault();
        // Validation
        let error = {};
        if (this.state.temp === '') error.temp = "Can't be empty";
        this.setState({ error });
        const isValid = Object.keys(error).length === 0
         if (isValid) {
            this.setState({ loading: true });
              this.props.fetchWheater(this.state.temp)
                this.setState({temp: ''})
        };
       }  
        render() {
          const { formatMessage } = this.props.intl;
          const { temp, error, isLoading, invalid} = this.state;
          const { onSubmit } = this.props;
            return(
              <Form onSubmit={this.onSubmit}>
                <Input error={false} type='text' placeholder={formatMessage(messages.SearchInput)} value={temp} onChange={this.onChange} name='temp' />
                <Button disabled={isLoading || invalid} inverted><FormattedMessage id={ 'Search.Button' } defaultMessage={ 'Execute' } /></Button>
              </Form> 

 )};
};
// sort of FormattedMessage. For placeholder in input. 
const messages = defineMessages({
    SearchInput: {
        id: 'Search.Input',
        defaultMessage: 'Search by city name',
    },
});
export default injectIntl(connect(null, {fetchWheater})(WeatherSearch));