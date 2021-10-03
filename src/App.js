import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductCard } from "./components/ProductCard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductCard />} />
            </Routes>
        </div>
    );
}

export default App;
