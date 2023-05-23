import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utilities/formatPrice.js";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export function ProductCard({ id, name, price, url, description}) {
    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart 
    } = useCart();
    const quantity = getItemQuantity(id);
    const navigate = useNavigate();
    const [action, setAction] = useState("Add to cart");


    function handleActionClick() {
        setAction("Added to cart");
        increaseCartQuantity(id);
    }

    return (
        <div key={id} className="singleImage">
            <img
                src={url}
                id={id}
                onClick={() => navigate("/product/" + id)}
                alt={"Image of " + name}
            />
            <h5 className="price mb-0">{formatPrice(price)}</h5>
            <h5 className="name mb-0">{name}</h5>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <button className="btn btn-outline-primary" onClick={handleActionClick}>{action}</button>
                ) : <button className="btn btn-outline-secondary disabled" onClick={handleActionClick}>{action}</button>}
            </div>
            {/* <button className="" onClick={handleActionClick}>{action}</button> */}
        </div>
    )
}