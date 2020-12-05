export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = basket => basket?.reduce((amount, item) => amount + item.price, 0)

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Could not remove product ${action.id} as it's not in cart`);
            }

            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer