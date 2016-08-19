// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addSelectedPlace } from '../../actions/places'

const Place = ({ place, handlePlaceClick }) => (
  <li onClick={handlePlaceClick}>
    <h3>{place.name}</h3>
    <p>{place.formattedAddress}</p>
  </li>
)

const PlacesResults = ({ placesResults, handlePlaceClick }) => (
  <div className="places-results">
    <ul>
      {placesResults.map(place => <Place handlePlaceClick={handlePlaceClick.bind(null, place)} place={place} />)}
    </ul>
  </div>
)

export default connect(({ placesResults }) => ({ placesResults }), { handlePlaceClick: addSelectedPlace})(PlacesResults)
