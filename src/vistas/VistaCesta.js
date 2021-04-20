import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { añadirCesta, removeCesta } from '../acciones/cestaAcciones';
import MessageBox from '../componentes/CajaMensaje';

export default function VistaCesta(props) {
  const productoId = props.match.params.id;
  const cantidad = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cesta = useSelector((state) => state.cesta);
    const { cestaItems } = cesta;
    const dispatch= useDispatch();
    useEffect(() => {
      if(productoId) {
        dispatch(añadirCesta(productoId,cantidad));
      }
     }, [dispatch,productoId,cantidad]);
     
  const eliminarCestaHandler = (id) => {
    dispatch(removeCesta(id))
  };

  const verificarHandler = () => {
    props.history.push('/identificarse?redirect=compra');
  };
  return (
    <div className = "fila top">
      <div className= "col-2">
      <h1>Vista Cesta</h1>
      <h1>Shopping Cart</h1>
      {cestaItems.length === 0 ? (
        <MessageBox>
          La cesta está vacía <Link to="/">Seguir con la compra</Link>
        </MessageBox>
      // <p>
       // Añadir a la cesta : ProductoID: {productoId} Cantidad: {cantidad}
       //</p>
           ) : (
            <ul>
              {cestaItems.map((item) => (
                <li key={item.producto}>
                  <div className="fila">
                    <div>
                      <img
                        src={item.image}
                        alt={item.nombre}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/producto/${item.producto}`}>{item.nombre}</Link>
                    </div>
                    <div>
                      <select
                        value={item.cantidad}
                        onChange={(e) =>
                          dispatch(añadirCesta(item.producto, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>{item.precio}€</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => eliminarCestaHandler(item.producto)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-1">
          <div className="carta carta-cuerpo">
            <ul>
              <li>
                <h2>
                  Subtotal ({cestaItems.reduce((a, c) => a + c.cantidad, 0)} items) : 
                  {cestaItems.reduce((a, c) => a + c.precio * c.cantidad, 0)}€
                </h2>
              </li>
              <li>
                <button
                  type="button"
                  onClick={verificarHandler}
                  className="bloque primario"
                  disabled={cestaItems.length === 0}
                >
                  Continiuar con el pago
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
