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

export const removeSelectedPlace = (place: Object) => ({
  type: 'REMOVE_SELECTED_PLACE',
  place
})

export const addSelectedPlace = (place: Object) => ({
  type: 'ADD_SELECTED_PLACE',
  place
})

export const searchPlaces = (place: string, location: Object) => (
  (dispatch: Function) => {
    dispatch(requestPlaces(place))
    return POI.searchPlaces(place, location)
      .then(places => dispatch(receivePlaces(places)))
      .catch(error => dispatch(fetchingPlacesError(error)))
  }
)
