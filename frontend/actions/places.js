// @flow
import * as POI from '../api/poi'

const requestPlaces = (place: string) => ({
  type: 'REQUEST_PLACES',
  place
})

const receivePlaces = (places: string) => ({
  type: 'RECEIVE_PLACES',
  places
})

export const fetchingPlacesError = (error: Object) => ({
  type: 'SEARCH_PLACES_ERROR',
  error
})

export const searchPlaces = (place: string, city: string) => (
  (dispatch: Function) => {
    dispatch(requestPlaces(place))
    return POI.searchPlaces(place, city)
      .then(places => dispatch(receivePlaces(places)))
      .catch(error => dispatch(fetchingPlacesError(error)))
  }
)
