import React from 'react'
import "./NavBaar.css";
import amazonPNG from "../images/amazon_PNG25.png"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

const NavBaar = () => {
  return (
    <header>
        <nav>
            <div className="left">
            <div className='nav_logo'>
                    <img src={amazonPNG} alt="" />
                </div>
                <div className="nav_search">
                    <input/>
                    <div className="search_icon">
                      <SearchIcon/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="nav_btn">
                    <a href="#">signIn</a>
                </div>
                <div className="cart_btn">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon id='icon'/>
                </Badge>
                <p>cart</p>
                </div>
                <Avatar className='avtar'/>
            </div>
        </nav>
    </header>
  )
}

export default NavBaar
