import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

function Home({ amount, addToCartRequest }) {
    const [products, setProducts] = useState([]);

    // replacing componentDidMount
    useEffect(() => {
        // creating another function to be able to use async directive
        async function loadProducts() {
            const response = await api.get('products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            // and instead of setState, we use setProducts now
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        console.tron.log(id);
        // here using the bindActionCreators we can use the action directly from the props
        addToCartRequest(id);

        // after adding a product to cart, redux saga navigates to the /cart page. This happens
        // at the generator addToCart

        // const { dispatch } = this.props;
        // dispatch(CartActions.addToCart(product));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />{' '}
                            {amount[product.id] || 0}
                            <span>Adicionar ao carrinho</span>
                        </div>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
