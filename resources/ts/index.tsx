import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Admin from "./layouts/Admin";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={Admin} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
