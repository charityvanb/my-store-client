import React, { Component } from 'react'
import ProductCard from './ProductCard'
import styles from './products-list.module.scss'
import Loader from '../Loader'

class Products extends Component {
  state = {
    products: [],
    isLoaded: false
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.products,
          isLoaded: true
        })
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error)
      })
  }

  render() {
    return (
      <div className={styles.container}>
        <header>
          <h1>Products</h1>
        </header>
        {this.state.isLoaded ?
          <div className={styles.productsContainer}>
            {this.state.products.map(product => {
              return (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  img_url={product.img_url}
                  price={product.price}
                />)
            })}
          </div>
          : <Loader />
        }

      </div>
    )
  }
}

export default Products