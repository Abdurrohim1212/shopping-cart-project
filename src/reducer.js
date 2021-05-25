const reducer = (state, action) => {
  const { type, payload } = action;
  const { cart } = state;
  const { total, amount } = cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );

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
    case "GET_TOTALS":
      return { ...state, total, amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: payload };
    default:
      return state;
  }
};
export default reducer;
