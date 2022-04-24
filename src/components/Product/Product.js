import React from 'react'
import { useStateValue } from '../Providers/StateProvider'
import './Product.css'
// ⭐⭐⭐⭐⭐
const Product = ({id, title, price, rating, image}) => {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <>
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                  <small>$</small>
                  <b>{price}</b>
                </p>
                <div className="product_rating">
                   {Array(rating).fill()
                   .map((_, i) => (
                     <p>⭐</p>
                   ))}
                </div>
            </div>

            {/* <img src="../images/bag.png" alt="" /> */}
            <img src={image} alt='product_image' />

            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    </>
  )
}

export default Product