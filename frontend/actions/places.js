// @flow
import * as POI from '../api/poi'
import { getHotels } from './hotels'

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

const calculateMidpoint = (places: Array<Object>) => ({
  type: 'CALCULATE_MIDPOINT',
  places
})


export const selectPlace = (place: Object) => (
  (dispatch: Function, getState: Function) => {
    dispatch(addSelectedPlace((place)))
    let places = getState().selectedPlaces
    dispatch(calculateMidpoint(places))
    let midPoint = getState().midPoint
    dispatch(getHotels(midPoint))
  }
)

export const searchPlaces = (place: string, location: Object) => (
  (dispatch: Function) => {
    dispatch(requestPlaces(place))
    return POI.searchPlaces(place, location)
      .then(places => dispatch(receivePlaces(places)))
      .catch(error => dispatch(fetchingPlacesError(error)))
  }
)
