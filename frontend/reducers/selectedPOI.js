// @flow

const initialState = [];

function selectedPOI(state: Array<Object> = initialState, action: Object = {}){
  switch(action.type) {
    case 'ADD_POI':
      return [...state, action.place]
    case 'REMOVE_POI':
      return state
    default:
      return state
  }
}

export default selectedPOI;
