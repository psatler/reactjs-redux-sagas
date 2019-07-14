import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
    // get the current state and perform a selector on it
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    if (productExists) {
        // we update the amount
        const amount = productExists.amount + 1;
        yield put(updateAmount(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
