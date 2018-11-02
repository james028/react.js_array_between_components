import React, { Component } from "react";
import "./styles.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PageNotFound from "./components/Pagenotfound";
import Homepage from "./components/Homepage";
import AdminPanel from "./components/Adminpanel";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/admin" component={AdminPanel} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
