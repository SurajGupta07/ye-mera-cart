import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductCard } from "./components/Product";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProductCard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </div>
    );
}

export default App;
