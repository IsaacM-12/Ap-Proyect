import { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import axios from "axios";
import { formatPrice } from "../utilities/formatPrice";


export function Cart({isOpen}){
    const { closeCart, cartItems } = useCart();


    const [products, setProducts] = useState({});

    useEffect(() => {
      axios.get(`http://localhost:8080/product`)
        .then(res => setProducts(res.data))
    }, []);


    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack direction="vertical" gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatPrice(cartItems.reduce((total, cartItem) => {
                            const product = Array.isArray(products) ? products.find(i => i.id === cartItem.id) : null;
                            return total + (product?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}