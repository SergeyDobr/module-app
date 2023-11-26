
const ADD_PRODUCT_TO_ORDER = "ADD_PRODUCT_TO_ORDER"
const defaultState = [];

export const orderReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_PRODUCT_TO_ORDER:
         return [...state, action.payload]
      default:
         return state
   }
}


// Action Creators
export const addOrderAC = (newObject) => {
   return {
      type: ADD_PRODUCT_TO_ORDER,
      payload: newObject,
   };
};