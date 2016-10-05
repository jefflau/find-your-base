// @flow
const initialState = 0

const pointAvg = (tot, legs) => ({lat:tot.lat/legs, lng: tot.lng/legs})

const midPointCalc = (state) =>
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

function reducer(state: number = initialState, action: Object = {}){
  switch(action.type) {
    case 'CALCULATE_MIDPOINT':
      return midPointCalc(action.places)
    default:
      return state;
  }
}

export default reducer;
