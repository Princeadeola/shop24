import React from 'react'
import { FaCartPlus,FaStoreAlt,FaSearch } from "react-icons/fa";
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../Providers/StateProvider';

const Header = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/" style={{ textDecoration: "none" }} > 
        <div className="header_logo">
          <FaStoreAlt className='header_logoImage'/>
          <h2 className='header_logoTitle'>SHOP24</h2>
        </div>
      </Link>

      <div className="header_search">
        <input className='header_searchInput' type='text' />
        <FaSearch className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <Link to="/Login" style={{ textDecoration: "none" }} >
          <div className="nav_item">
            <span className='nav_itemLineOne'>Hello Guest</span>
            <span className='nav_itemLineTwo'>Sign In</span>
          </div>
        </Link>
        
        <div className="nav_item">
          <span className='nav_itemLineOne'>Your</span>
          <span className='nav_itemLineTwo'>Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration:"none" }}>
          <div className='nav_itemBasket'>
            <FaCartPlus />
            <span className='nav_itemLineOne nav_basketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header