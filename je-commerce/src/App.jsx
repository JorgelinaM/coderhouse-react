import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
          <Route exact path="/book/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
