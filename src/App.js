import React , { useState } from 'react';
import Navbar from './component/navbar';
import Store from './component/store';
import Cart from './component/cart';

function App() {
  const [show, setShow] = useState(true)
  const [cart,setCart] = useState([])
  const handleClick = (item) =>{
   cart.push(item);
   console.log(cart)
}

return (
<React.Fragment>
  <Navbar setShow={setShow} size={cart.length}/>
{show ? <Store handleClick={handleClick} /> : <Cart cart={cart}/>}
</React.Fragment>
  );
};

export default App;
