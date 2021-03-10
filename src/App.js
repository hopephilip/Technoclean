import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about';
import Clean from './pages/clean';
import Home from './pages/home';
import Price from './pages/price';
import Wash from './pages/wash';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/price' component={Price} />
          <Route path='/about' component={AboutPage} />
          <Route path='/wash' component={Wash} />
          <Route path='/clean' component={Clean} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
