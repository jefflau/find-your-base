// @flow

const initialState = [];

function placesReducer(state: Array<Object> = initialState, action: Object = {}){
  switch(action.type) {
    case 'RECEIVE_PLACES':
      return action.places
    default:
      return state;
  }
}

export default placesReducer;
