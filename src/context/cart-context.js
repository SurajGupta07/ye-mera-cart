import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [toast, setToast] = useState(false);

    return (
        <CartContext.Provider
            value={{ cartItems, setCartItems, toast, setToast }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};

export default CartProvider;
