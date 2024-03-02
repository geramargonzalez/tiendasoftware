/* eslint-disable no-unused-vars */

import { createContext, useContext, useState } from 'react';

const cartContext = createContext();
const { Provider } = cartContext;
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemsTotal, setItemsTotal] = useState(0); 
    const [total, setTotal] = useState(0); 

    const addItem = (item, quantity) => {
        setItemsTotal(itemsTotal + quantity);
        setTotal(total + item.price * quantity);

        if (isInCart(item.id)) {
            console.log('entro');
            const newCart = cart.map((cartItem) => {
                if (cartItem.item.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, { item, quantity }]);
        }
    };

    const removeItem = (id) => {};

    const clear = () => {
        setCart([]);
        setItemsTotal(0);
        setTotal(0);
    };

    const isInCart = (id) => cart.find((item) => item.item.id === id);

    const valorDelContexto = { cart, itemsTotal, addItem, removeItem, clear };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CartProvider;
