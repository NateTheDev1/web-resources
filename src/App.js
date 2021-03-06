import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

export default function App() {

  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
        </Switch>
    </Router>
  );
}
