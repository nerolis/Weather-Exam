
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/Reducers/rootReducer';
import App from './src/components/App'
import { addLocaleData, IntlProvider } from 'react-intl';
import { StaticRouter } from 'react-router-dom';
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
import LocalesMenu from './src/components/Navigation/LocalesMenu'

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(rootReducer)
  const intlData = { locale: 'en',  messages: localeData};
  // Render the component to a string
  const context = {}
if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url)
} else {
  // we're good, send the response
}
  const html = renderToString (
  <IntlProvider key="intl" {...intlData}> 
    <StaticRouter location={req.url} context={context}>
    <Provider store={store}>
      <App />
    </Provider>
     </StaticRouter>
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
    <meta charset="utf-8">
    <title>weather exam</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
  </head>
  <body>
   <div id="root" style="height: 100%">${html}</div>
    </div>
          <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
  <script type="text/javascript" src="/public/bundle.js"></script></body>
</html>
     `
}


app.listen(port)
