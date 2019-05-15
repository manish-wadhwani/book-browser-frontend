const initialState = {
    selectedProduct: null
}
const reducer = (state = initialState, action) => {
    if (action.type === "SELECT_PRODUCT") {
        return { ...state, selectedProduct: action.value }
    }
    return state;
}

export default reducer