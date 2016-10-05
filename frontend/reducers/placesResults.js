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

const pointAvg = (tot, legs) => ({lat:tot.lat/legs, lng: tot.lng/legs})

export const midPointCalc = (state) =>
    pointAvg(
        state.reduce((acc, curr) =>
                ({
                  lat: acc.lat + curr.location.lat,
                  lng: acc.lng + curr.location.lng
                }),
            {lat: 0, lng: 0}
        ),
        state.length
    )

export default placesReducer;

