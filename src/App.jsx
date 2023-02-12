import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter> 
      <NavBar />
      
      <main>
      <Routes>
        <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto"/>} />  
        <Route path="/" element={<ItemListContainer greeting="Catálogo de Shoe Store!"/>} />
        <Route path="/Ecommerce" element={<ItemListContainer greeting="Bienvenido a Shoe Store"/>} />
        <Route path="/category/:categoryid" element={<ItemListContainer greeting="Categoría"/>} />
      </Routes>
      <hr />
      
      <div className="back1">
<div className="back1 back2">
<div className="back1 back3">
			</div>
          </div>
         </div>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
