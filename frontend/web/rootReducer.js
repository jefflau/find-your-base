// @flow
import { combineReducers } from 'redux'
import serverError from '../reducers/serverError'
import config from '../reducers/config'
import placesResults from '../reducers/placesResults'
import selectedPlaces from '../reducers/selectedPlaces'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  serverError,
  placesResults,
  selectedPlaces,
  config,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer;
