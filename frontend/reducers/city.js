// @flow

const initialState = {};

function cityReducer(state: Object = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_CITY':
      return action.city
    default:
      return state;
  }
}

export default cityReducer;
