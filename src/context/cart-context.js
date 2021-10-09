import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                wishlist,
                setWishlist,
                totalAmount,
                setTotalAmount,
                cartCount,
                setCartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};

export default CartProvider;
