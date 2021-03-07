import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/about";
import Home from "./pages/home";
import Wash from "./pages/wash";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/wash" component={Wash} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
