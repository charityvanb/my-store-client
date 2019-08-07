import React from 'react'
import styles from './home.module.scss'
// import Loader from '../Loader'
import ladiesHats from '../../images/ladiesHats.png'


const Home = () => {
  return (
    <div className="styles.home">
      <img src={ladiesHats} alt="Ladies' Hat Emporium"/>
    </div>
  )
}

export default Home