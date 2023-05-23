import { createContext, useContext, useState } from "react"
import { Cart } from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext({})

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cart", []);

    const cartQuantity = cartItems.reduce(
        (total, item) => total + item.quantity, 0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id){
        const item = cartItems.find(item => item.id === id)
        if (!item)
            return 0;
        return item.quantity;
    }

    function increaseCartQuantity(id){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null){
                console.log("adding new item")
                return [...currentItems, {id: id, quantity: 1}]
            }
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        })
    }

    function decreaseCartQuantity(id){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !== id)
            }
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })
        })
    }

    function removeFromCart(id){
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart,
                cartItems,
                cartQuantity,
                openCart, 
                closeCart
                }}>
            {children}
            <Cart isOpen={isOpen} />
        </CartContext.Provider>
    )
}