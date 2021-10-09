import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div style={{position: 'sticky', top: '0px', zIndex: '100'}}>
            <nav className="navigation">
                <h1 className="nav-brand" style={{textAlign: 'center'}}> <Link to="/" className="items-link">O teri Cart</Link></h1>
                <ul>
                    <li>
                        <Link to="/" className="items-link">HOME</Link>{" "}
                    </li>
                    <li>
                        <Link to="/cart" className="items-link">CART</Link>{" "}
                    </li>
                    <li>
                        <Link to="/wishlist" className="items-link">WISHLIST</Link>{" "}
                    </li>
                    <li>
                        <button className="btn btn-secondary" onClick={() => navigate("/login")}>
                            LOG IN
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-secondary" onClick={() => navigate("/signup")}>
                            SIGN UP
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};