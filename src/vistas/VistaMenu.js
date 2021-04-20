import React, { useEffect } from 'react';
import Producto from '../componentes/Producto';
import {useDispatch,useSelector} from 'react-redux';
import { listaProductos } from '../acciones/productoAcciones';
import CajaCargando from '../componentes/CajaCargando';
import CajaMensaje from '../componentes/CajaMensaje';



export default function VistaMenu() {
  const dispatch = useDispatch();
  const productoLista = useSelector((state)=> state.productoLista);
  const {loading,error,productos} = productoLista;
  
  useEffect(()=>{
    dispatch(listaProductos());
  }, [dispatch]);
  return(
      <div>
        {loading ? (
        <CajaCargando></CajaCargando>
        ):error ?(
        <CajaMensaje variant="danger">{error}</CajaMensaje>
        ): (
        <div className= "fila centro">
           {productos.map((producto) => (
            <Producto key={producto._id} producto={producto}></Producto>
           ))}
      </div>
       )}
    </div>
 );
 } 
