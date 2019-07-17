import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png';

// cart is coming from mapStateToProps
export default function Header() {
    // this replaces the connect and mapStateToProps stuff
    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My cart</strong>
                    <span>{cartSize} items </span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
