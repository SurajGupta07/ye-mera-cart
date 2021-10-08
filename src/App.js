import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductCard } from "./components/Product";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { Login } from "./components/Login";
import { useState } from "react";

function App() {
    const [login, setLogin] = useState(true);
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProductCard />} />
                {login && <Route path="/cart" element={<Cart />} />}
                {login && <Route path="/wishlist" element={<Wishlist />} />}
                {!login && <Route path="/cart" element={<Login />} />}
                {!login && <Route path="/wishlist" element={<Login />} />}
            </Routes>
        </div>
    );
}

export default App;