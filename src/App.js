import React from 'react'
import logo from './logo.svg'
import './styles/global.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'

// Component imports
//Checking to see if it pushed properly

import Home from './components/Home'
import Navigation from './components/Navigation'
import ProductsList from './components/ProductsList'
import ProductDetail from './components/ProductDetail'
import PaymentSuccess from './components/PaymentSucess'
import PaymentCancel from './components/PaymentCancel'
import PrivateRoute from './components/PrivateRoute'
import ExternalAPI from './components/ExternalAPI'

function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      {/* When you toss stuff in the Switch, it will only render the first matched <Route/> child */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products/:id' component={ProductDetail} />
        <Route exact path='/products' component={ProductsList} />
        <Route path='/success' component={PaymentSuccess} />
        <Route path='/cancel' component={PaymentCancel} />
        <Route path='/profile' component={Profile} />
        <PrivateRoute path='/test' component={ExternalAPI} />
      </Switch>
    </Router>
  )
}

export default App
