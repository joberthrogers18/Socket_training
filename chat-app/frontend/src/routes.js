import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Auth from "./pages/Auth";
import ListUsers from "./pages/ListUsers";
import Chat from "./pages/Chat";
import NotFound from "./components/NotFound";

export default function Routes() {
  const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("tokenId") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <PrivateRoutes path="/users" component={ListUsers} />
        <PrivateRoutes path="/chat/:id" component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
