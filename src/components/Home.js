//type 'rfc' 

import React  from 'react';

import Itemcard from "./Itemcard";
import Header from './Header';

import data from '../data/data';


// import {CartProvider} from "react-use-cart"



export default function Home() {

  
  return (
    <>   
        
        
        <div>
        <h1 className = "text-center mt-3"  style = {{ color: "#576179"}}>Featured Items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>

                  {data.productData.map((item, index) => {
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


         
            
    </>

  )
}
