import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import ListUsers from "./pages/ListUsers";
import Chat from "./pages/Chat";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/users" component={ListUsers} />
        <Route path="/chat/:id" component={Chat} />
      </Switch>
    </Router>
  );
}
