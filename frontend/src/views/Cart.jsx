import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Cisco Catalyst 1000", price: 80000 },
    { id: 2, name: "Rack-Mount SonicWall", price: 45000 },
    { id: 3, name: "Ruckus R510", price: 50000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      setCart(newCart);
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5 mb-5">
      <h2>Carrito de compras</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₡{item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  onChange={(event) => addToCart(item, parseInt(event.target.value))}
                />
              </td>

              <td>
                <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total: ₡{175000}</p>
      <div class="d-flex justify-content-end">
          <button class="btn btn-primary" type="button">Checkout</button>
        </div>


    </div>
  );
}

export default Cart;
