import React, { useEffect, useState } from 'react'
import Manimg from '../../components/ManImage/Manimg'
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import './home.css'

const Home = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const headers = { 'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo' };
    fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', { headers })
      .then(response => response.json())
      .then(data => setProduct(data));

    console.log(product)
  }, []);

  const click = () => {
    console.log(product)
  }

  return (
    <div>
      <Manimg />
      <FilterComponent />
    </div>
  )
}

export default Home;