import React, { useEffect, useState } from 'react'
import './header.css'
import cart from '../../images/cart.png'
import { useNavigate } from 'react-router-dom'
import { CardState } from '../../context/Context'
import CartPanel from '../CartPanel/CartPanel'

const Header = () => {
  const navigate = useNavigate()
  const { state, dispatch } = CardState();
  const [cartPanel, iscartPanelOpen] = useState(false);


  return (
    <div className='header'>
      <div className='container'>
        <div className='headerbox'>
          <div className='header_name' onClick={() => navigate("/")}>
            <h4 className='header_name1'>RIGHT</h4>
            <h4>FIT.COM</h4>
          </div>
          <div className='header_links'>
            <h4 onClick={() => navigate('/all-product')} className='header_link1'> All Product</h4>
            <h4 onClick={() => navigate('/featured-product')}>Feature Product</h4>
            <div className='img_div' onClick={()=>iscartPanelOpen(true)}>
              <img src={cart} alt="icon" width={30} height={30} />
              <h5>{state.cart.length}</h5>
            </div>
          </div>
          {cartPanel===true? <CartPanel iscartPanelOpen={iscartPanelOpen}/>: <></>}

        </div>
      </div>
    </div>
  )
}

export default Header