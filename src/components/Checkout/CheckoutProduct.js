import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = () => {
  return (
    <>
        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    Bennet mystic 15.6 inch laptop shoulder messenger sling office Bag, 
                    Water Repellent Fabric for Men and Women (Blue
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct_rating">
                    ⭐⭐⭐⭐
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    </>
  )
}

export default CheckoutProduct