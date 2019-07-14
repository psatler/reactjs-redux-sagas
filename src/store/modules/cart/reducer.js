import produce from 'immer'; // https://github.com/immerjs/immer

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;

                draft.push(product);
            });
        // return [
        //     ...state,
        //     {
        //         ...action.product,
        //         amount: 1,
        //     },
        // ];

        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            // if (action.amount <= 0) { // this is already being done on the sagas
            //     return state;
            // }

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}
