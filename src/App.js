import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component imports
import Home from './components/Home'
import Navigation from './components/Navigation'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      {/* When you toss stuff in the Switch, it will only render the first matched <Route/> child */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products/:id' component={ProductDetail} />
        <Route exact path='/products' component={ProductsList} />
      </Switch>
    </Router>
  )
}

export default App
