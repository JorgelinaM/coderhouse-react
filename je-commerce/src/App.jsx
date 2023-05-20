import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:idCategory" element={<ItemListContainer />} />
        <Route exact path="/book/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
