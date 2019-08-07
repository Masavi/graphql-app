import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbarcito from './components/Navbarcito';
import routes from './Routes';

function App() {
  return (
    <Router>
      <Navbarcito />
      <Switch>
        { routes }
      </Switch>
    </Router>
  );
}

export default App;
