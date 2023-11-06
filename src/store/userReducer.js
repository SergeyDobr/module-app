const SET_USER_TOKEN = 'SET_USER-TOKEN'

const defaultState = {
   token: "",
}
export const userReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_USER_TOKEN:
         return { ...state, token: action.payload.token }
      default: return state
   }
}

export const setUserTokenAC = (token) => ({
   type: 'SET_USER-TOKEN',
   payload: {
      token
   }
})