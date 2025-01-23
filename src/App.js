import './App.css';
import NavBar from "./componentes/NavBar/NavBar";
import ContenedorDeItems from './componentes/ContenedorDeItems/ContenedorDeItems';
import ContenedorDetallesItems from './componentes/ContenedorDetallesItem/ContenedorDetallesItem';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import InCarrito from './componentes/InCarrito/InCarrito';
import Contacto from './componentes/Contacto/contacto';
import Promociones from './componentes/Promociones/promociones';
import { CarritoProvider } from './context/CarritoContext';
import { Footer } from './componentes/Footer/Footer';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase/firebase';
import {lista} from "./mock/data"
import CheckOut from './componentes/CheckOut/checkout';
import { DarkModeProvider } from './context/DarkMode';
import { BusquedaProvider } from './context/BusquedaContext';



function App() {

  /*useEffect(()=>{
    const coleccionProductos = collection(db, "productos")
    lista.map((item)=> addDoc(coleccionProductos, item))
  },[])*/

  return (
  <CarritoProvider>
    <DarkModeProvider>
      <BusquedaProvider>

    
    
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<ContenedorDeItems/>}/>
        <Route path="/categoria/:categoriaId" element={<ContenedorDeItems/>}/>
        <Route path="/item/:id" element={<ContenedorDetallesItems/>}/>
        <Route path="/carrito" element={<InCarrito/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='/promociones' element={<Promociones/>}></Route>
        <Route path="checkout" element={<CheckOut/>}></Route>
      </Routes>

    

    </BrowserRouter>

    </BusquedaProvider>

    </DarkModeProvider>

  </CarritoProvider>
  );
}

export default App;
