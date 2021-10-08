import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart-context";
export const Wishlist = () => {
    const { wishlist, setCartItems, setWishlist } = useCart();
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Ye muje chahiye</h1>
            <div className="card-row">
                {wishlist.map((product) => (
                    <div key={product.id}>
                        <div className="card" style={{ borderRadius: 0 }}>
                            <img
                                src={product.image}
                                alt="itm-img"
                                style={{ width: "230px" }}
                            />
                            <h2
                                className="card-title"
                                style={{
                                    fontWeight: "bold",
                                    margin: 0,
                                }}
                            >
                                {product.brandnName}
                            </h2>
                            <div>{product.description}</div>
                            <p style={{ margin: "0.5rem 0" }}>
                                <b>Rs. {product.offeredPrice}</b>{" "}
                                <span style={{ fontSize: "0.75rem" }}>
                                    <s>Rs. {product.actualPrice}</s>
                                </span>{" "}
                                (
                                {Math.round(
                                    ((product.actualPrice -
                                        product.offeredPrice) /
                                        product.actualPrice) *
                                        100
                                )}
                                % off)
                            </p>
                            <div>{product.type}</div>
                            <div>{product.stitched}</div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setCartItems((items) => [...items, product]);
                                    navigate("/cart");
                                    setWishlist((prevValue) => prevValue.filter((item) => item !== product))
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
