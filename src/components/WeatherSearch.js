// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Message, Label, Checkbox } from 'semantic-ui-react'
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
// Actions
import fetchWheater from '../Actions/weatherAction';
// Components
class WeatherSearch extends React.Component {
    constructor() {
    super()
    this.state = {
      temp: '',
      errors: {},
      invalid: false,
      isLoading: false, 
      error: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
};
      onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    };
    
        onSubmit(e, lang) {
       e.preventDefault();
        // Validation
        let errors = {};
        if (this.state.temp === '') this.setState({error: true})
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
        if (isValid) {
             this.setState({ loading: true });
              lang = localStorage.getItem('locale')
              this.props.fetchWheater(this.state.temp, lang)
                this.setState({temp: ''})
        };
       }  
        render() {
          const { formatMessage } = this.props.intl;
          const { temp, error, isLoading, invalid } = this.state;
          const { onSubmit } = this.props;
            return(
            
              <Form onSubmit={this.onSubmit}> 
                <Input error={error} type='text' placeholder={formatMessage(messages.SearchInput)} value={temp} onChange={this.onChange} name='temp' />
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