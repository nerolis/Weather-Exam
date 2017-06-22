// Modules
import React from 'react';
import { intlShape, injectIntl, defineMessages } from 'react-intl';
import { Menu, Dropdown, Item, } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom'
import { connect} from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
// Components
import App from '../App';
// Actions
// Our translated
import localeData from '../../../build/locales/data.json';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...ru])
class LocalesMenu extends React.Component {
  constructor() {
    super();
      this.state = {locale: navigator.language.toLowerCase().split(/[_-]+/)[0]}; // eto legalno?
    }
  
    // Восстановление стейта после релоада. todo: переделать через стораж
     componentDidMount() {
     this.localLang()
    }
    localLang() {
     const localLanguage = localStorage.getItem('locale');
     this.setState({locale: localLanguage})
    }
         render() {
         const intlData = { locale: this.state.locale,  messages: localeData[this.state.locale]};
         return (
            // React-Intl энтри, через роут передает всем остальным. Не хотелось засорять index.js.
          <IntlProvider key="intl" {...intlData}> 
             <div className="ui container">
                <div className="ui secondar color blue  inverted  four item menu">
                    <Menu.Item >
                     <Link onClick={(() => this.setState({locale: 'en'}, localStorage.setItem('locale', 'en')))} to='/#en'>En</Link>
                   </Menu.Item>    
                   <Menu.Item >
                     <Link onClick={(() => this.setState({locale: 'ru'}, localStorage.setItem('locale', 'ru')))} to='/#ru'>Ru</Link>
                  </Menu.Item>  
               </div>
              <Route  exact path='/' component={App} /> 
            </div>
        </IntlProvider>

        )   
    }
}
  // Router custom link https://reacttraining.com/react-router/web/example/custom-link
   const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
  <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )}/>
);
export default connect(null, {})(LocalesMenu);