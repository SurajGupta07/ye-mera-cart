import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductCard } from "./components/Product";
import { Header } from "./components/Header";
import { Cart } from "./components/authenticated/Cart";
import { Wishlist } from "./components/authenticated/Wishlist";
import { Login } from "./components/Login";

function App() {
    let login = false;
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
