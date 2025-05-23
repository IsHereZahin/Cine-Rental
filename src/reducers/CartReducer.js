const initialState = {
    cartData: [],
};

const CartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart": {
            const exists = state.cartData.some(
                (item) => item.id === action.payload.id
            );
            if (exists) {
                console.log(`${action.payload.title} already exists in cart`);
                return state;
            }

            console.log(`Added ${action.payload.title} to cart`);
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            };
        }
        case "removeFromCart":
            console.log(`Removed ${action.payload.title} from cart`);
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
