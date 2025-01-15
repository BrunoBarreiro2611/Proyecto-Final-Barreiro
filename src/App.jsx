import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';  
import ItemDetailContainer from './components/ItemDetailContainer';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>  
      <NavBar /> 
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="Bienvenido a AccesoriosUY, encuentra los mejores productos para ti!" />} 
        />
        <Route 
          path="/category/:id"  
          element={<ItemListContainer />} 
        />
        <Route 
          path="/item/:id"  
          element={<ItemDetailContainer />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
