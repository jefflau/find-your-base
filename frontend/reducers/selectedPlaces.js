// @flow

const initialState = [];

function selectedPOI(state: Array<Object> = initialState, action: Object = {}){
  switch(action.type) {
    case 'ADD_SELECTED_PLACE':
      if(state.find(place => place.id === action.place.id))
        return state
      return [...state, action.place]
    case 'REMOVE_SELECTED_PLACE':
      return state.filter(place => place.id !== action.place.id)
    default:
      return state
  }
}

export default selectedPOI;
