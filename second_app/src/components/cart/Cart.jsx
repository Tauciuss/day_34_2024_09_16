import { useState, useEffect } from 'react';
import CartProduct from '../cart-product/CartProduct';

import './Style.css';
import './Shadow.css';
import './Cart.css';

function Cart() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const selectedProducts = JSON.parse(localStorage.getItem('selected_products')) || [];
    setProducts(selectedProducts);
  }, []);

  const buyMiddle = () =>{
    console.log(products);
    return products.map((value) => {
        <CartProduct data={value}/>
    })
    
  }
  const closeCart = () =>{}
  return (
    <>
      <div className="shadow"></div>
      <div className="buy-cart">
        <div className="items-cart">
          <div className="top">
            <div className="left">Shopping cart</div>
            <div className="right"></div>
          </div>
          <div className="buy-middle">
            {buyMiddle()}
          </div>
          <div onClick={closeCart} id="back-main" className="bottom">
            <span className="material-symbols-outlined">◀ </span>Back to shop
          </div>
        </div>
        <div className="summary">
          <div className="top">Summary</div>
          <div className="middle">
            <div className="items">
              <div className="summary-total-items"></div>
              <div className="summary-total-items-price"></div>
            </div>
            <div className="shipping">Shipping
              <form>
                <select name="delivery" id="delivery-options">
                  <option value="5">Standard Delivery: $5</option>
                  <option value="10">Express Delivery: $10</option>
                  <option value="20">Super Fast Delivery: $20</option>
                </select>
              </form>
            </div>
            <div className="discount-code">Discount code
              <form>
                <input type="text" />
              </form>
            </div>
            <div className="bottom">
              <div className="total">
                <div className="total-price">TOTAL PRICE</div>
                <div className="total-delivery">200</div>
              </div>
              <div className="buy-button">BUY</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
