import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './Graphql';
import Navbarcito from './components/common/Navbarcito';
import routes from './Routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbarcito />
        <div className="container mt-4">
          <Switch>
              { routes }
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
