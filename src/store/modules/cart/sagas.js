import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
    // get the current state and perform a selector on it
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    // checking the stock amount
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    // if exists, we use the current amount, otherwise, it's zero because it's not on cart yet
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1; // we update the amount

    if (amount > stockAmount) {
        // console.tron.warn(`Out of stock`);
        toast.error('Amount requested out of stock');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));

        history.push('/cart'); // we only navigate on the first time we choose a product
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Amount requested out of stock');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
