import React from 'react'
import { useCart } from 'react-use-cart'

export default function Cart() {
  const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart
  } = useCart();

  if (isEmpty) return <h1 className='text-center' style = {{color: "#576179",  border: "1px solid #576179", margin: "1%", backgroundColor: "#e3f2fd"}}>Your cart is empty</h1>;


  return (
    <>
    <section className='py-4 container'style= {{marginTop: "1%", border: "1px solid #576179",backgroundColor: "#e3f2fd"}}>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>My Cart ---- Total Items: ({totalItems})</h5>
          <table className = "table table-light table-hover m-0" style = {{backgroundColor: "#e3f2fd"}}>
            <tbody>           
              {items.map((item, index) => {
                return(
                  <tr key = {index}>
                    <td>
                    <img src = {item.img} style = {{height: "6rem"}}/>
                    </td>
                    <td>{item.title}</td>
                    <td>₱ {item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button className='btn btn-info ms-2'
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1 )}
                      
                      >-</button>
                      <button className='btn btn-info ms-2'
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1 )}
                      
                      >+</button>
                      <button className='btn btn-danger ms-2'
                      onClick={() => removeItem(item.id)}
                      
                      >Remove</button>
                    </td>

                  </tr>
                )
              
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'><h2>Total price: ₱{cartTotal}</h2></div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={() => emptyCart()}>
            Clear cart
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
