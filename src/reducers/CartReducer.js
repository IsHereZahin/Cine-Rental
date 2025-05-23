const initialState = {
    cartData: [],
};

const CartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart": {
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            };
        }
        case "removeFromCart":
            return {
                ...state,
                cartData: state.cartData.filter(
                    (movie) => movie.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export { CartReducer, initialState };

