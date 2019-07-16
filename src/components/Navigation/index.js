import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'
import { useAuth0 } from '../../react-auth0-wrapper'

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav className={styles.navigation}>
      <Link to="/products">Products</Link>
      <Link to="/">Home</Link>
      {!isAuthenticated && (
        <Link
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Link>
      )}

      {isAuthenticated && <Link onClick={() => logout()}>Log out</Link>}

    </nav>
  )
}

export default Navigation