import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/products">Products</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Navigation