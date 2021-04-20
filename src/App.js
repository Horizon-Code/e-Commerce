import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter,Link,Route} from "react-router-dom";
import VistaCesta from './vistas/VistaCesta';
import VistaMenu from './vistas/VistaMenu';
import VistaProducto from './vistas/VistaProducto';





function App() {
  const cesta= useSelector((state)=>state.cesta);
   const {cestaItems} = cesta;
  return (
    <BrowserRouter>
    <div className="grid-contenedor">
     <header className="fila">
      <div className="logo">
          <img className="peq" src="\images\logo.jpg" alt="logo"></img>
      </div>
      <div>
        <Link  className="marca" to="/">Grammazon</Link>
      </div>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      <div>
        <Link to="/cesta">Cesta</Link>
         {cestaItems.length > 0 && (
          <span className = "cestasimbolo">
          {cestaItems.length}
          </span>
        )}
        <Link to="/identificarse">Identificarse</Link>
      </div>
     </header>

    <main>
    <Route path="/cesta/:id?" component={VistaCesta}></Route>
    <Route path="/productos/:id" component={VistaProducto}></Route>
    <Route path="/" component={VistaMenu} exact></Route>

   </main> 
   <footer className="fila centro">All right reserved Horizon-code</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
