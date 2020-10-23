import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CharactersList from '../containers/CharactersList';
import CharcaterInfo from '../containers/CharcaterInfo';

function App() {
  return (
    <div className="App">
      <Link to="/" className="Logo">
        Breaking Bad Cast
      </Link>
      <Switch>
        <Route exact path="/">
          <CharactersList />
        </Route>
        <Route exact path="/show/:id">
          <CharcaterInfo />
        </Route>
        <Route>
          <div>404 not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
