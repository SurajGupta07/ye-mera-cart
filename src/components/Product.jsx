import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products-context";
import { useCart } from "../context/cart-context";

export const ProductCard = () => {
    const { productItems } = useProducts();
    const { setCartItems, setWishlist } = useCart();
    const navigate = useNavigate();
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "35px",
                    zIndex: "1000",
                }}
            >
                Ye mera products
            </h1>
            <div className="card-row">
                {productItems.map((item) => (
                    <div key={item.id}>
                        <div className="card" style={{ borderRadius: 0 }}>
                            <img
                                src={item.image}
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
                                {item.brandnName}
                            </h2>
                            <div>{item.description}</div>
                            <p style={{ margin: "0.5rem 0" }}>
                                <b>Rs. {item.offeredPrice}</b>{" "}
                                <span style={{ fontSize: "0.75rem" }}>
                                    <s>Rs. {item.actualPrice}</s>
                                </span>{" "}
                                (
                                {Math.round(
                                    ((item.actualPrice - item.offeredPrice) /
                                        item.actualPrice) *
                                        100
                                )}
                                % off)
                            </p>
                            <div>{item.type}</div>
                            <div>{item.stitched}</div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    setCartItems((items) => [...items, item]);
                                    navigate("/cart");
                                }}
                            >
                                Add to cart
                            </button>
                            <button
                            className="btn btn-outline-primary"
                            onClick={() => {
                                setWishlist((items) => [...items, item])
                                navigate("/wishlist")
                            }}>
                                Add to wishlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
