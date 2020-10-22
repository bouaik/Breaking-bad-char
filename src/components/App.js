import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CharactersList from "../containers/CharactersList";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Link to="/">home</Link>
        <Switch>
          <Route exact path="/">
            <CharactersList />
          </Route>
          <Route>
            <div>404 not found</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
