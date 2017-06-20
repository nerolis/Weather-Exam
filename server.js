
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/Reducers/rootReducer';
import App from './src/components/App'
import { addLocaleData, IntlProvider } from 'react-intl';
// Components
// Actions
// Our translated
import localeData from './build/locales/data.json';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...ru])
const app = Express()
const port = 3000
global.navigator = { // иначе выдает ошибку, так как навигатора нет на ноде
  userAgent: 'node.js'
};
//Serve static files
app.use('/public', Express.static('public'));

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) { /* ... */ }
function renderFullPage(html, preloadedState) { /* ... */ }
import { renderToString } from 'react-dom/server'

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(rootReducer)
  const intlData = { locale: 'en',  messages: localeData};
  // Render the component to a string
  const html = renderToString(
  <IntlProvider key="intl" {...intlData}> 
    <Provider store={store}>
      <App />
    </Provider>
 </IntlProvider>
  )
  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
}
function renderFullPage(html, preloadedState) {
  return `
<!DOCTYPE html>
      <html>
      <head>
      </head>
      <body>
        <div id="react-view">${html}</div>
        <script type="application/javascript" src="/public/bundle.js"></script>
            <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
     `
}


app.listen(port)
