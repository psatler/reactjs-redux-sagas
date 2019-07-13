import produce from 'immer'; // https://github.com/immerjs/immer

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(
                    p => p.id === action.product.id
                );
                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    // product not yet in the cart, so amount equals to 1
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });
        // return [
        //     ...state,
        //     {
        //         ...action.product,
        //         amount: 1,
        //     },
        // ];

        default:
            return state;
    }
}
