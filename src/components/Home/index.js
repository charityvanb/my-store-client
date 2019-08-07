import React from 'react'
import styles from './home.module.scss'
// import Loader from '../Loader'
import ladiesHats from '../../images/ladiesHats.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
  // <div className="styles.home">
      
  //   <img src={ladiesHats} alt="Ladies' Hat Emporium" href="/products"/>
  // </div>

    <Link to="/products">
      <img src={ladiesHats} alt="Ladies Hat Emporium" href="/products"/>
    </Link>
  )
}

export default Home