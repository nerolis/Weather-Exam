import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/components/App';
import LocalesMenu from './src/components/Navigation/LocalesMenu';

const app = express();

app.get('/', (req, res) => {
  const appString = renderToString(<App />);

  res.send(template({
    body: appString,
    title: 'FROM THE SERVER'
  }));
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);