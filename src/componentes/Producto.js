import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Producto(props){
          
  const {producto}=props;
  return(
            <div key={producto._id} className="carta">               
                <Link to={`/productos/${producto._id}`}>
                 <img className="mediana" src={producto.image} alt={producto.image}></img>
                </Link>
                <div className="carta-cuerpo">
                 <Link to={`/productos/${producto._id}`}>
                    <h2>{producto.nombre}</h2>
                  </Link>
                  <Rating rating={producto.rating} numeroreseñas={producto.numeroreseñas}>
                  </Rating>
                  <div className="precio">€{producto.precio}</div>
                </div>
              </div> 
            )
            } 