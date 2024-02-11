import { createContext, useContext } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }; // clone of prev cart
      // if the item is alrady in the cart
      if (prevCart[product.id]) {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity++;
        newCart[product.id] = newProduct;
      } else {
        newCart[product.id] = {
          ...product,
          quantity: 1,
        };
      }
      return newCart;
    });
  };
  return (
    <CartContext.Provider value={{ name: "React" }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
export default CartContextProvider;
