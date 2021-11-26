import React from 'react';
import { Link } from 'react-router-dom'

const  NavItems = (props) =>{

  return (
      <>
          <Link className="nav-link active" aria-current="page"  to={props.url}>{props.name}</Link>
                 
      </>
  )
}
export default NavItems;