import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ProductCard } from "./components/Product";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist";
import { Login } from "./components/Login";
// import { PrivateRoute } from "./components/PrivateRoute";
const login = false;

function PrivateRoute({ ...props }) {
    console.log(login)
    return login ? <Route {...props} /> : <Navigate replace to="/login" />;
}

function App() {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProductCard />} />
                <Route path = "/login" element={<Login />} />
                <PrivateRoute path="/cart" element={<Cart />} />
                <PrivateRoute path="/wishlist" element={<Wishlist />} />
            </Routes>
        </div>
    );
}

export default App;