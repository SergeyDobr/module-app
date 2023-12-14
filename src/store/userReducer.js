export const SET_USER_TOKEN = 'SET_USER-TOKEN'
export const GET_USER_TOKEN = 'GET_USER-TOKEN'
export const LOG_OUT_TOKEN = 'LOG_OUT_TOKEN'

const defaultState = {
   token: "",
   userName: "",
}
export const userReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_USER_TOKEN:
         return { ...state, token: action.payload.token, userName: action.payload.userName }
      case GET_USER_TOKEN:
         return { ...state, token: action.payload.token, userName: action.payload.userName }
      case LOG_OUT_TOKEN:
         return defaultState
      default: return state
   }
}

export const setUserAC = (token, userName) => ({
   type: SET_USER_TOKEN,
   payload: {
      token,
      userName,   
   }
})
export const getUserAC = (token, userName) => ({
   type: GET_USER_TOKEN,
   payload: {
      token,
      userName,
   }
})
export const logOutUserAC = () => ({
   type: LOG_OUT_TOKEN,
})