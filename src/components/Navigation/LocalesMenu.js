import React, {Component} from 'react';
import {intlShape, injectIntl, defineMessages} from 'react-intl';
import {Menu, Dropdown, Item, Segment, Button, Icon, Label} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {weatherDegree} from '../../Actions/weatherAction';
import {switchLanguage} from '../../Actions/languageAction';
import App from '../App';
import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
// Our translated strings
import localeData from '../../../build/locales/data.json';

addLocaleData([...en, ...ru])
class LocalesMenu extends Component {
  constructor() {
    super();
      this.state = {locale: 'en'};
    }
        render() {
      const intlData = {
         locale: this.state.locale,
         messages: localeData[this.state.locale]};
      return (
       <IntlProvider key="intl" {...intlData}>
         <div className="ui container">
          <div className="ui basic small stackable  inverted three item   menu">
           <Menu.Item >
             <Link onClick={(() => this.setState({locale: 'en'}))} to='/#en'>En</Link>
           </Menu.Item>
            <Menu.Item >
             <Link onClick={(() => this.setState({locale: 'ru'}))} to='/#ru'>Ru</Link>
           </Menu.Item>  
        </div>
         <Route  exact path='/' component={App} />
       </div>
      </IntlProvider>

        )   
    }
}
const ActiveLink = ({ label, to, activeOnlyWhenExact }) => 
(
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
  <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )}/>
);
export default LocalesMenu;