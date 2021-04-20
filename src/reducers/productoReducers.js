const {
  PRODUCTO_LISTA_REQUEST,
  PRODUCTO_LISTA_SUCCESS,
  PRODUCTO_LISTA_FAIL,
  PRODUCTO_DETALLES_REQUEST,
  PRODUCTO_DETALLES_SUCCESS,
  PRODUCTO_DETALLES_FAIL,
} = require('../constantes/productoConstantes');

export const productoListaReducer = (state= {loading:true,productos:[]},action) => {
    switch(action.type){
        case PRODUCTO_LISTA_REQUEST:
            return {loading:true};
        case PRODUCTO_LISTA_SUCCESS:
            return {loading:false, productos: action.payload};
        case PRODUCTO_LISTA_FAIL:
            return {loading:false, error: action.payload};
        default:
            return state;
        

    }
};

export const productoDetallesReducer = 
( state = { producto: {}, loading: true }, action) => {
    switch (action.type) {
      case PRODUCTO_DETALLES_REQUEST:
        return { loading: true };
      case PRODUCTO_DETALLES_SUCCESS:
        return { loading: false, producto: action.payload };
      case PRODUCTO_DETALLES_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }//696748389
  };
