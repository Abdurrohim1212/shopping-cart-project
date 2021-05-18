const reducer = (state, action) => {
  const { type, payload } = action;
  const { cart } = state;
  switch (type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE":
      return {
        ...state,
        cart: cart.filter(cartItem => {
          return cartItem.id !== payload;
        }),
      };

    default:
      return state;
  }
};
export default reducer;
