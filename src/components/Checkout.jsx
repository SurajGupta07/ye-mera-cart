import { useCart } from "../context/cart-context";

const TotalPrice = (cartItems) => {
    let { totalAmount, setTotalAmount } = useCart();
    let myTotalAmount = cartItems?.reduce((acc, item) => acc + item.offeredPrice, 0);
    setTotalAmount(myTotalAmount);
    return <div style={{ display: 'inline' }}>{totalAmount}</div>;
};

export const Checkout = () => {
    let { cartItems } = useCart();
    return (
        <div className="card" style={{width: '500px', marginLeft: '1rem', padding: '1rem'}}>
            <h3 className="price-text">PRICE DETAILS</h3>
            {cartItems?.map(({ brandnName, offeredPrice, id }) => {
                return (
                    <div key={id}>
                        <div>
                            <div>
                                Item:<strong> {brandnName}</strong>
                            </div>
                            <div>
                                Price:<strong> ₹{offeredPrice}</strong>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div>
                <h3>Total Amount = ₹{TotalPrice(cartItems)}</h3>
            </div>
            <button className="btn btn-outline-primary">
                Place Order
            </button>
        </div>
    );
};
