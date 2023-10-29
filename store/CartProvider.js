import cartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
