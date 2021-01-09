import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Game } from "./Game/Game";
import { Player } from "./Player/Player";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <Player />
      </Route>
    </Switch>
  </Router>
);
