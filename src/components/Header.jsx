import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav>
                <h3>O teri Cart</h3>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>{" "}
                    </li>
                    <li>
                        <Link to="/cart">CART</Link>{" "}
                    </li>
                    <li>
                        <Link to="/wishlist">WISHLIST</Link>{" "}
                    </li>
                    <li>
                        <button onClick={() => navigate("/login")}>
                            LOG IN
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate("/signup")}>
                            SIGN UP
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
