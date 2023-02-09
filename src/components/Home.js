//type 'rfc' 

import React from 'react';
import Itemcard from "./Itemcard";
import Header from './Header';
import data from '../data/data';


export default function Home() {
  return (
    <>   
        <Header/>
        <h1 className = "text-center mt-3">All items</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                  {data.productData.map((item, index) => {
                    return(
                      <Itemcard img = {item.img} title = {item.title} desc = {item.desc} price = {item.price} key = {index}></Itemcard>

                    )
                  }
                  )}
                    

                </div>
            </section> 
    </>

  )
}
