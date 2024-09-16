import { useState } from 'react'
import './Product.css'
import ProductPrice from './ProductPrice';
import Button from './Button';
import ProductRating from './ProductRating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product(prop) {
    const prod_id = prop.prod_id;
    const image = prop.image;
    const discount = prop.discount;
    const brand = prop.brand;
    const rating = prop.rating;
    const description = prop.description;
    const price = prop.price;

    
  return (
    <>
    <div className="product-container">
        <div className="thumbnail">
            <img src={image} alt="" />
            <span className="discount">-{discount}</span>
        </div>
        <div className="text-area">
            <span className="brand-name">{brand}</span>
            <ProductRating rating={rating}/>
            <span className="description">{description}</span>
        </div>
        <div className="purchase">
            <ProductPrice price={price} discount={discount}/>
            <Button/>
        </div>
    </div>
    </>
  )
}

export default Product
