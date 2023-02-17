import React , {useImperativeHandle, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Cart from './Cart';
import { useCart } from 'react-use-cart'
import { Link, useMatch, resolvePath, useResolvedPath } from 'react-router-dom';


export default function Header() {
  
  const [show,setShow] = useState(false);

  const {
    totalUniqueItems,
  } = useCart();

  const ShowCart = () => {
    if (show === true) {
      setShow(false)

    }else{
      setShow(true)
    }
  }



  return (
    <div>
        <nav class="navbar navbar-light" style = {{ backgroundColor: '#e3f2fd', paddingLeft: "2%", display: "flex", justifyContent: "space-between"}}  >
            <Link to = "/" style = {{textDecoration: "none"}}><h3 style = {{ color: "#576179"}}>Home Funiture</h3></Link>

            <div style = {{display: "flex", justifyContent: "space-between", gap: "20px"}}>
            <CustomLink to = "/all-products" style={{textDecoration:"underline", color: "#576179", fontSize: "15px"}}>All products</CustomLink>
            <button onClick={ShowCart} style ={{backgroundColor:"transparent", border: "none"}}>
              <FontAwesomeIcon icon={faCartShopping} style = {{fontSize: "20px"}}/>
              <span class="badge badge-success" style = {{ backgroundColor: "#576179", padding: "0 2px,", verticalAlign: "top", marginLeft: "-10px", borderRadius: "50%"}}>{totalUniqueItems}</span>
            </button>
            </div>
            
        
        </nav>
        <div>
           
          {
            show && (<Cart/>)
          }
          

        </div>
    </div>
    
  )

  function CustomLink ({to, children, ...props}){

    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({path: resolvePath.pathname, end: true  })

    return(
        <div className={isActive? "active": ""}>
          <Link to = {to }{...props}>
            {children}
          </Link>
          </div>
    )
  }
}
