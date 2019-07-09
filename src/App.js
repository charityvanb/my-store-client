import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Home from './components/Home'
import Navigation from './components/Navigation'
import Products from './components/Products'

function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      {/* When you toss stuff in the Switch, it will only render the first matched <Route/> child */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products}/>
      </Switch>
    </Router>
  );
}

export default App;
