import { createContext, useReducer, useState, useEffect, useContext } from "react";
import { cartReducer } from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {

    const products = {
        name: "cloth"
    }
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
};

export default Context;

export const CardState = () => {
    return useContext(Cart);
};
