// @flow

import React from 'react'
import { connect } from 'react-redux'
import { removeSelectedPlace } from '../../actions/places'

const Place = ({ place, handlePlaceClick }) => (
  <li className="place" onClick={handlePlaceClick}>
    <h3>{place.name}</h3>
    <p>{place.formattedAddress}</p>
  </li>
)

const SelectedPlaces = ({ selectedPlaces, handlePlaceClick }) => (
  <div className="selected-places">
    <ul>
      {selectedPlaces.map(place => <Place handlePlaceClick={handlePlaceClick.bind(null, place)} place={place} />)}
    </ul>
  </div>
)

export default connect(({ selectedPlaces }) => ({ selectedPlaces }), { handlePlaceClick: removeSelectedPlace})(SelectedPlaces)
