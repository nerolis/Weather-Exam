// Modules
import React from 'react';
import { Link, Route} from 'react-router-dom';
import {mainstyle} from './main.scss';
// Components
import LocalesMenu from './Navigation/LocalesMenu';
import WeatherSearch from './WeatherSearch';
import WeatherList from './WeatherList';
import { Container, Grid, Divided, Segment} from 'semantic-ui-react';
import WeatherByLocation from './WeatherByLocation';
const App = () => (
<Container>
     <LocalesMenu />
   <Grid columns={3}>
    <Grid.Row stretched>
      <Grid.Column>
         <WeatherByLocation />
      </Grid.Column>
      <Grid.Column verticalAlign='bottom'>
       <WeatherList />
        <WeatherSearch />
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>    
</Container>
)
export default App;