import React from 'react'
import { connect } from 'react-redux'
import { addPOI } from '../../actions/places'

const Place = ({ place, handlePlaceClick }) => (
  <div onClick={handlePlaceClick}>
    <h3>{place.name}</h3>
    <p>{place.formattedAddress}</p>
  </div>
)

const PlacesResults = ({ placesResults, handlePlaceClick }) => (
  <div>
    {placesResults.map(place => <Place handlePlaceClick={handlePlaceClick.bind(null, place)} place={place} />)}
  </div>
)

export default connect(({ placesResults }) => ({ placesResults }), { handlePlaceClick: addPOI})(PlacesResults)
