// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; 
import { createStore, applyMiddleware, compose } from 'redux';
// Reducers/ Utils
import { loadState, saveState } from './Utils/LocalStorage';
import rootReducer from './reducers/rootReducer';
// Components
import LocalesMenu from './components/Navigation/LocalesMenu';

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  //preloadedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
store.subscribe(() => {
 saveState({
  weather: store.getState().weather,
  })
})

ReactDOM.render(
   <BrowserRouter>
  <Provider store={store}>
    <LocalesMenu/>
  </Provider>
 </BrowserRouter>, document.getElementById('root') 
);
    