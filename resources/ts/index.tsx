import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./layouts/Dashboard";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
