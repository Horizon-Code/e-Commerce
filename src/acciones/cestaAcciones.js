import Axios from "axios";
import { CESTA_ADD_ITEM, CESTA_REMOVE_ITEM } from "../constantes/cestaConstantes";

export const añadirCesta = (productoId, cantidad) => async(dispatch, getstate) =>{
    const {data} = await Axios.get(`/api/productos/${productoId}`);
    dispatch({
        type: CESTA_ADD_ITEM,
        payload: {
            nombre:data.nombre,
            image: data.image,
            precio: data.precio,
            stock: data.stock,
            producto: data._id,
            cantidad,
        },
    });
    localStorage.setItem('cestaItems', JSON.stringify(getstate().cesta.cestaItems));
};

export const removeCesta = (productoId) => async(dispatch, getstate) =>{
    dispatch({
        type: CESTA_REMOVE_ITEM,
        payload: productoId});
    localStorage.setItem('cestaItems', JSON.stringify(getstate().cesta.cestaItems));
}