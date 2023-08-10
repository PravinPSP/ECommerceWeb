import React from 'react'
import man from '../../images/man.png'
import './manimg.css'

const Manimg = () => {
  return (
    <div className='main_body'>
      <div className='body_text'>
        <h1>Latest Style</h1>
        <h4>At yesterday price</h4>
        <button>Browse all style</button>
      </div>
      <img className='body_img' src={man} alt="img" />

    </div>
  )
}

export default Manimg;