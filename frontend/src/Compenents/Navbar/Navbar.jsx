import React, { useState, useContext } from 'react'; 
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext'; 

const Navbar = () => {
    const [menu, setMenu] = useState('shop'); 
    const { cartItems } = useContext(ShopContext);
    const {getTotalCartItems}=useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPING</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu('shop')}><Link to='/'>shop</Link> {menu === 'shop' ? <hr /> : null}</li>
                <li onClick={() => setMenu('mens')}><Link to='/mens'>men</Link> {menu === 'mens' ? <hr /> : null}</li>
                <li onClick={() => setMenu('womens')}><Link to='/womens'>women</Link> {menu === 'womens' ? <hr /> : null}</li>
                <li onClick={() => setMenu('kids')}><Link to='/kids'>kids</Link> {menu === 'kids' ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>login</button></Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;


