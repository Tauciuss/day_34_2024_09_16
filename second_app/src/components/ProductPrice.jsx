import { useState } from 'react'

function ProductPrice(prop) {
  const price = prop.price;
  const discount = prop.discount;

  var discounted_price = (price - ((price * discount) / 100)).toFixed(2)

  return(
    <>
    <span className="discount-price">${discounted_price} <span className='original-price'>${price}</span></span>
    </>
  )
}

export default ProductPrice
