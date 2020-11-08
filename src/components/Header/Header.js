import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="amazon :)" />
            {/* The below image is for mobile devices */}
            <img src="https://lh3.googleusercontent.com/proxy/xrh_7avsqQlz4bv_9G7MVlMrgpf1WCzpn1wTQmoz5OQdR6F4w5C2kDnbNKcEzfh6ujgPwKyxee6X-KEn2H7qLcjVMUnmKgli12B4eu1_FwzMez8XCrfj" className="header__logoMobile" alt="amazon :)" />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
            <div className="header__option">
                <span className="header__option__lineOne">Hello Guest</span>
                <span className="header__option__lineTwo">Sign in</span>
            </div>
            <div className="header__option">
                <span className="header__option__lineOne">Returns &amp;</span>
                <span className="header__option__lineTwo">Orders</span>
            </div>
            <div className="header__option">
                <span className="header__option__lineOne">Your</span>
                <span className="header__option__lineTwo">Prime</span>
            </div>
            <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__basketCount header__option__lineTwo">0</span>
            </div>
            </div>
        </div>
    )
}

export default Header