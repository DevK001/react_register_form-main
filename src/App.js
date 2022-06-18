import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {  useState } from 'react';
import Header from './Header';
import Meals from './Components/meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';
import {Route , Routes} from "react-router-dom"


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    
   <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Navbar onShowCart={showCartHandler}/>
    <div>
      <Routes>
    <Route path="/" element={<Meals/>} />
        <Route path="/Register.js" element={<Register />} />
        <Route path="/Login.js" element={<Login />} />
      </Routes>
    </div>
   </CartProvider>
  );
}

export default App;