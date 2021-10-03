import { useProducts } from "../context/products-context";

export const ProductCard = () => {
    const { productItems } = useProducts();
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Ye mera products</h1>
            <div className="card-row">
                {productItems.map((item) => (
                    <div key={item.id}>
                        <div>
                            <img src={item.image} alt="itm-img" />
                            <h2>{item.brandnName}</h2>
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
                        </div>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
