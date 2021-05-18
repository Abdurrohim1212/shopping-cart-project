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
    case "INCREASE":
      return {
        ...state,
        cart: cart.map(item => {
          if (item.id === payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    case "DECREASE":
      return {
        ...state,
        cart: cart
          .map(item => {
            if (item.id === payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          .filter(item => item.amount !== 0),
      };
    default:
      return state;
  }
};
export default reducer;
