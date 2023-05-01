const CartReducer = (state, action) => {
  const addOneHandler = (action, state) => {
    const updatedCart = [...state.cart];
    const findIndex = updatedCart.findIndex(
      (item) => item.id == action.payload.id
    );

    if (findIndex < 0) {
      updatedCart.push({ ...action.payload, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[findIndex] };
      updatedItem.quantity++;
      updatedCart[findIndex] = updatedItem;
    }
    return {
      ...state,
      cart: updatedCart,
      total: state.total + action.payload.price,
    };
  };
  switch (action.type) {
    case "ADD_TO_CART": {
      return addOneHandler(action, state);
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const findIndex = updatedCart.findIndex(
        (item) => item.id == action.payload.id
      );
      const updatedItem = { ...updatedCart[findIndex] };

      if (updatedItem.quantity == 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[findIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total - action.payload.price,
      };
    }
  }
};
export default CartReducer;
