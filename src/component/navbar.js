import React from 'react';
import "../styles/navbar.css"

function Navbar({setShow}) {
  return (
   <nav>
    <div className="navbar">
        <span className="shop" onClick={() => setShow(true)}>My Shoping cart </span>

        <div className="cart" onClick={() => setShow(false)}>
             <span>

                </span>

                 <span>0</span></div>
    </div>
   </nav>


  );
}

export default Navbar;
