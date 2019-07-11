import React from 'react'
import Card from '../../Card'
import Style from './product-card.module.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, img_url, price, description, id }) => {
    return (
        <Link to={`/products/${id}`}>
        <Card>
        <h2>{name}</h2>
        <img src={img_url} alt="product" className="image"/>
        <h3>${price / 100}.00</h3>
        </Card>
        </Link>
    )
}

export default ProductCard