
const ADD_PRODUCT_TO_ORDER = "ADD_PRODUCT_TO_ORDER"
const REMOVED_PRODUCT_FROM_ORDER = "REMOVED_PRODUCT_FROM_ORDER"
const UPDATE_PRODUCT = "UPDATE_PRODUCT"
const defaultState = [];

export const orderReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_PRODUCT_TO_ORDER:
         return [...state, action.payload]
      case REMOVED_PRODUCT_FROM_ORDER:
         return state.filter(item=>item.id !== action.payload.id)
      case UPDATE_PRODUCT:
         return state.map(item=>{
            if(item.id === action.payload.id){
               return ({
                  ...item,
                  quantity: action.payload.quantity,
               })
            }
            return item
         })
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

export const updateOrderAC = (newObject) => {
   return {
      type: UPDATE_PRODUCT,
      payload: newObject,
   };
};
export const removeProductFromOrderAC = (newObject) => {
   return {
      type: REMOVED_PRODUCT_FROM_ORDER,
      payload: newObject,
   };
};