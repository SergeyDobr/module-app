export const SET_CATEGORIES ='SET_CATEGORIES'
export const GET_CATEGORIES = 'GET_CATEGORIES'

const defaultState = {
   data:"",
}


export function categoriesReducer(state = defaultState, action) {
   switch (action.type) {
       case SET_CATEGORIES:
           return {
               ...state,
               data: action.payload.data
           }
       default:
           return state
   }
}



export const getCategoriesAC = () => ({
   type: GET_CATEGORIES,
   payload: {
       
   }
})
export const setCategoriesAC = ({ data }) => ({
   type: SET_CATEGORIES,
   payload: {
       data
   }
})