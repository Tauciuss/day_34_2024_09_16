import { useState, useEffect } from 'react';
import './Cart.css'

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const selectedProducts = JSON.parse(localStorage.getItem('selected_products')) || [];
    setProducts(selectedProducts);
  }, []);

  const openCart = () => {
  };

  const closeCart = () => {
  };

  return (
    <>
      <div className="main">
        <div className="cart-container">
          <div className="icon-cart">Items in shopping Cart</div>
          <div className="quantity">{products.length}</div>
          <span onClick={openCart} id="cart-btn" className="material-symbols-outlined">
            shopping_cart
          </span>
          <div className="cart"></div>
        </div>
        <div className="result"></div>
      </div>

      <div className="shadow"></div>
      <div className="buy-cart">
        <div className="items-cart">
          <div className="top">
            <div className="left">Shopping cart</div>
            <div className="right"></div>
          </div>
          <div className="buy-middle"></div>
          <div onClick={closeCart} id="back-main" className="bottom">
            <span className="material-symbols-outlined">arrow_back</span>Back to shop
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
