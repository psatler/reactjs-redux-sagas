import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png';

// cart is coming from mapStateToProps
function Header({ cartSize }) {
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

const mapStateToProps = state => ({
    cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
