import { useState, useEffect } from 'react';

function CartProduct({cart}){
    return(
        <>
            <div className="row-items">  
                <div className="item">
                    <img src= {cart.thumbnail} alt=""/>
                    <div className="item-about">
                        <div className="name">${cart.name}</div>
                    </div>
                </div>
                <div className="item-quantity">
                    <span onclick="removeItem()" className="material-symbols-outlined item-remove">remove</span>
                    <div className="item-selected-quantity">${cart.quantity}</div>
                    <span onclick="addTo()" className="material-symbols-outlined item-add ">add</span>
                </div>
                <div className="item-price-remove">
                    <div className="item-price">$${cart.price}</div>
                    <div onclick="itemDelete()" className="item-delete">x</div>
                </div>
            </div>
        </>
    )
}

export default CartProduct