import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Rating from '../componentes/Rating';
import { Link } from 'react-router-dom';
import CajaCargando from '../componentes/CajaCargando';
import CajaMensaje from '../componentes/CajaMensaje';
import {detallesProducto} from '../acciones/productoAcciones';


export default function VistaProducto(props) {
    const dispatch = useDispatch();
    const productoId = props.match.params.id;
    const[cantidad,setCantidad] = useState(1);
    const productoDetalles = useSelector((state) => state.productoDetalles);
    const{loading,error,producto} = productoDetalles;
    
    useEffect(()=>{
      dispatch(detallesProducto(productoId));
    }, [dispatch,productoId]);

    const añadirCestaHandler =() => {
      props.history.push(`/cesta/${productoId}?cantidad=${cantidad}`);
    };

    return (
      <div>
      {loading ? (
      <CajaCargando></CajaCargando>
      ):error ?(
      <CajaMensaje variant="danger">{error}</CajaMensaje>
      ): (
        <div>
          <Link to="/">Back to result</Link>
          <div className="fila top">
            <div className="col-2">
              <img className="grande" src={producto.image} alt={producto.nombre}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{producto.nombre}</h1>
                </li>
                <li>
                  <Rating
                    rating={producto.rating}
                    numeroreseñas={producto.numeroreseñas}
                  ></Rating>
                </li>
                <li>Precio : €{producto.precio}</li>
                <li>
                  Descripcion:
                  <p>{producto.descripcion}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="carta carta-cuerpo">
                <ul>
                  <li>
                    <div className="fila">
                      <div>Precio</div>
                      <div className="precio">€{producto.precio}</div>
                    </div>
                  </li>
                  <li>
                    <div className="fila">
                      <div>Estado:</div>
                      <div>
                        {producto.stock > 0 ? (
                          <span className="exito">En Stock</span>
                        ) : (
                          <span className="error">No disponible</span>
                        )}
                      </div>
                    </div>
                  </li>
                   {producto.stock > 0 && (
                  <>
                     <li>
                       <div className="fila">
                        <div>Cantidad</div>
                        <div>
                         <select value={cantidad} onChange={(e)=>setCantidad(e.target.value)}>
                          {[...Array(producto.stock).keys()].map(
                              (x) => (
                               <option Key={x+1} value={x+1}>
                                {x + 1}
                               </option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                   </li>
                   <li>
                    <button
                     onClick={añadirCestaHandler}
                     className="bloque primario">
                       Añadir a la cesta
                    </button>
                   </li>
                  </>
                 )}
               </ul>
             </div>
            </div>
          </div>
        </div>
     )}   
  </div>
 );
}
