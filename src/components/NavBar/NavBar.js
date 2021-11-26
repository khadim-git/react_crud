import NavItems from './NavItems';
import React from 'react';
const  NavBar = (props) =>{

    
  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {props.data.map ((items,key) => {
                 return (
                  <li className="nav-item" id={key} key={key}>
                  <NavItems  name={items.name} url={items.path}/>
                </li>
              )
              })}
            </ul>
            </div>
          </div>
      </nav>
      </>
  )
}
export default NavBar;