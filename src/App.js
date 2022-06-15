//import Register from './Register';
//import Login from './Login';
import {  useState } from 'react';
import Header from './Components/layout/Header';
import Meals from './Components/meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <main className="App">
      {/* <Register/> */}
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    </main>
  );
}

export default App;