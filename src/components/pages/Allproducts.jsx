import React from 'react'
import Itemcard from '../Itemcard'
import data from '../../data/data'
import { Link } from 'react-router-dom'

export default function Allproducts() {
  return (
    <div>
      <h1 className = "text-center mt-3"  style = {{ color: "#576179"}}>All Products</h1>
          <div style = {{ display: 'flex', justifyContent: "space-around"}}>
            <Link to = "/add-product">ADD PRODUCT</Link>
          </div>
        <section className='py-4 container'>
          <div className='row justify-content-center'>

                {data.allProduct.map((item, index) => {
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
