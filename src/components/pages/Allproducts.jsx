import React, { useEffect, useState } from 'react'
import Itemcard from '../Itemcard'

import { Link } from 'react-router-dom'

export default function Allproducts() {
  const API_URL = "http://localhost:5000/allProduct"
  const[items,setItems] = useState([])

  // -- FETCHING DATA FROM API -- //

  useEffect(() =>{

    const fetchItems = async() => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems)
        
      } catch (error) {
        console.log(error.stack)
        
      }

    }
    (async() => await fetchItems())();

   
  },[])

  
  
  return (
    <div>
      <h1 className = "text-center mt-3"  style = {{ color: "#576179"}}>All Products</h1>
          <div style = {{ display: 'flex', justifyContent: "space-around"}}>
            <Link to = "/add-product">ADD PRODUCT</Link>
          </div>
        <section className='py-4 container'>
          <div className='row justify-content-center'>

                {items.map((item, index) => {
                    return(
                      <Itemcard 
                      img = {item.img} 
                      title = {item.title} 
                      desc = {item.desc}
                      price = {item.price}
                      item = {item} 
                      key = {index}></Itemcard>

                    )
                  }
                  )}
            </div>
          </section>

          
    </div>
  )
}
