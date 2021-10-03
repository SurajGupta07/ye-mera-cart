import { createContext, useContext, useEffect, useState } from "react";
import allProducts from "../db/ProductsDB";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        setProductItems(allProducts);
    }, []);

    return (
        <ProductContext.Provider value={{ productItems, setProductItems }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductContext);
};

export default ProductProvider;
