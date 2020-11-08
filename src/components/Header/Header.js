import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon :)" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
            </div>
            <div className="headerOption">
                <span className="headerOption__LineOne">Hello </span>
                <span className="headerOption__LineTwo">Guest</span>
            </div>
            <div className="headerOption">
                <span className="headerOption__LineOne">Orders &amp; </span>
                <span className="headerOption__LineTwo">Returns</span>
            </div>
            <div className="headerOption">
                <span className="headerOption__LineOne">Your</span>
                <span className="headerOption__LineTwo">Prime</span>
            </div>
        </div>
    )
}

export default Header