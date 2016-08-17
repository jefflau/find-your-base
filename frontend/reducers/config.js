// @flow
type config = {}

const initialState = {
}

function reducer(state: config = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
}

export default reducer;
