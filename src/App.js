import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Users from "./Users";
import UsersDetail from "./UsersDetail";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>

        <Route exact path="/:id">
          <UsersDetail />
        </Route>
      </Switch>
    </div>
  );
}
