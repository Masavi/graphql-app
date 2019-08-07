import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './Routes';

function App() {
  return (
    <Router>
     {/* TODO: Navbar */}   
      <Switch>
        { routes }
      </Switch>
    </Router>
  );
}

export default App;
