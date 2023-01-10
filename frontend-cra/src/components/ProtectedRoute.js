import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoggedContext } from "../context/LoggedContext";

export function ProtectedRoute({ component: Component, ...props }) {
  const loggedIn = React.useContext(LoggedContext);

  return (
    <Route>
      {() => (loggedIn ? <Component {...props} /> : <Redirect to="./" />)}
    </Route>
  );
}

export function EntranceRoute({ component: Component, ...props }) {
  const loggedIn = React.useContext(LoggedContext);

  return (
    <Route>
      {() => (loggedIn ? <Redirect to="./" /> : <Component {...props} />)}
    </Route>
  );
}
