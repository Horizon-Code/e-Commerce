import { CESTA_ADD_ITEM, CESTA_REMOVE_ITEM } from '../constantes/cestaConstantes';

export const cestaReducer = (state = { cestaItems: [] }, action) => {
  switch (action.type) {
    case CESTA_ADD_ITEM:
      const item = action.payload;
      const existeItem = state.cestaItems.find((x) => x.producto === item.producto);
      if (existeItem) {
        return {
          ...state,
          cestaItems: state.cestaItems.map((x) =>
          x.producto === existeItem.producto ? item : x
          ),
        };
      } else {
        return { ...state, cestaItems: [...state.cestaItems, item] };
      }
    case CESTA_REMOVE_ITEM:
      return{...state, 
        cestaItems: state.cestaItems.filter(x=>x.producto !== action.payload)};
    default:
      return state;
  }
};