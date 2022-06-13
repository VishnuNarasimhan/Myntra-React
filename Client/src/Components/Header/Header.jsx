import React from 'react';
import { Link } from 'react-router-dom';
import myntraLogo from '../../utils/Myntra_logo.png';
import './header.css';
import { FaSistrix, FaRegUser, FaRegHeart } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';

export default function Header() {
  return (
    <div className='header-content'>
      <Link to='/'>
        <img src={myntraLogo} alt='' className='myntra-logo' />
      </Link>
      <div className='header-names'>
        <h4 className='header-men'>MEN</h4>
        <h4>WOMEN</h4>
        <h4>KIDS</h4>
        <h4>HOME & LIVING</h4>
        <h4>BEAUTY</h4>
      </div>
      <div className='input-icon'>
        <div className='input-icon-div-img'>
          <FaSistrix className='input-icon-img' />
        </div>

        <input
          placeholder='Search for products, brands and more'
          className='search-bar-input'
        />
        <div className='user-icons'>
          <div className='user-icons-profile'>
            <FaRegUser />
            <h6>Profile</h6>
          </div>
          <div className='user-icons-wishlist'>
            <FaRegHeart />
            <h6>Wishlist</h6>
          </div>
          <div className='user-icons-bag'>
            <BsBag />
            <h6>Bag</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
