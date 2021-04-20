import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cestaReducer } from './reducers/cestaReducers';
import { productoDetallesReducer, productoListaReducer } from './reducers/productoReducers';


const initialState = {
  cesta:{
    cestaItems:localStorage.getItem('cestaItems') ? 
    JSON.parse(localStorage.getItem('cestaItems'))
    : [],
  },
};
const reducer = combineReducers({
  productoLista: productoListaReducer,
  productoDetalles: productoDetallesReducer,
  cesta: cestaReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;