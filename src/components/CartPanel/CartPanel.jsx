import React from 'react'
import './cartPanel.css'
import { CardState } from '../../context/Context';

const CartPanel = ({ iscartPanelOpen }) => {
    const { state, dispatch } = CardState();
    const cartItems = state.cart;
    console.log(cartItems)

    return (
        <div className='cartpanel'>
            <button onClick={() => iscartPanelOpen(false)}>close</button>
            {
                cartItems && cartItems.map((item, key) => (
                    <div className='cart_item'>
                        <img src={item.image} alt="" width={200} height={200} />
                        <div className='cart_info'>
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                            <button
                                onClick={()=> {
                                    dispatch({
                                        type:'REMOVE_FROM_CART',
                                        payload:item

                                    })
                                }}
                            >Remove from cart</button>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default CartPanel