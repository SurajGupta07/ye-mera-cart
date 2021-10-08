import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([])

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, wishlist, setWishlist }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};

export default CartProvider;
