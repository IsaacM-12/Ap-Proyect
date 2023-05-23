import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "react-bootstrap";
import { formatPrice } from "../utilities/formatPrice";

export function CartItem({id, quantity}){
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();

    const [product, setProduct] = useState({});

    useEffect(() => {
      axios.get(`http://localhost:8080/product/${id}`)
        .then(res => setProduct(res.data))
    }, []);

    return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img className="cart-image" src={product.url} alt={product.name} />
        <div className="me-auto">
          <div>
            {product.name} 
            {quantity > 0 && (<span className="ms-1 text-muted">x{quantity}</span>)}
          </div>
          <div className="text-muted cart-price">{formatPrice(product.price)}</div>
        </div>
        <div> {formatPrice(product.price * quantity)}</div>
        <button className="btn btn-outline-secondary" onClick={() => increaseCartQuantity(id)}>
          <i className="bi bi-plus-lg"></i>
        </button>
        <button className="btn btn-outline-secondary" onClick={() => decreaseCartQuantity(id)}>
          <i className="bi bi-dash-lg"></i>
        </button>
        <button className="btn btn-outline-danger" onClick={() => removeFromCart(id)}>
          <i className="bi bi-trash3-fill"></i>
        </button>
      </Stack>
    )
}