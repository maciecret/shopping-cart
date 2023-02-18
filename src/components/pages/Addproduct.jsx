import React from 'react'
import data from '../../data/data' 
import { useState } from 'react';
import axios from 'axios';

export default function Addproduct() {

  const API_URL = "http://localhost:5000/allProduct"

 

  const [inputs, setInputs] = useState([]);
  const [items, setItems] = useState([])
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => (
      {...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(inputs)
    await axios.post(API_URL, inputs);
    alert('Data Inserted');
  }

  return (
    <div style = {{marginTop: "5%"}}>
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Name"
              name= "title"
              value= {inputs.title || ""}
              onChange={handleChange}
            /><br/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Price"
              name="price"
              value={inputs.price || ""}
              onChange={handleChange}
            /><br/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Description"
              name="desc"
              value={inputs.desc || ""}
              onChange={handleChange}
            /><br/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Image URL"
              name="img"
              value={inputs.img || ""}
              onChange={handleChange}
            /><br/>
          </div>

          <div  style = {{display: "flex", justifyContent: "space-around"}}>
          <button className="btn btn-primary btn-block"  style = {{backgroundColor: "#86a4ba", border: "none"}}>Add Product</button>
          </div>

        </form>
      </div>
    </div>
  </div>  




    // <form onSubmit={handleSubmit}>
    //   <label>Product Name
    //   <input 
    //     type="text" 
    //     name="title" 
    //     value={inputs.title|| ""} 
    //     onChange={handleChange}
    //   />
    //   </label>
    //   <label>Price
    //     <input 
    //       type="number" 
    //       name="price" 
    //       value={inputs.price || ""} 
    //       onChange={handleChange}
    //     />
    //     </label>
    //     <input type="submit" />
    // </form>
  )
}
