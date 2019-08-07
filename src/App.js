import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbarcito from './components/Navbarcito';
import routes from './Routes';

function App() {
  return (
    <Router>
      <Navbarcito />
      <div className="container mt-4">
        <Switch>
            { routes }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
