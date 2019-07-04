import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="App">
      <Link to="/products">Products</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Navigation