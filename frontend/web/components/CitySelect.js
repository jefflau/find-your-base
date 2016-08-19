import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBox } from 'react-google-maps'
export const fields = [ 'city' ]

class CitySelect extends Component {
  handlePlacesChanged() {
    const places = this.refs.searchBox.getPlaces()
    console.log(places)
  }
  render() {
    return (
      <div className="city-select">
        <h2>Where are you going?</h2>
      </div>
    )
  }
}

export default connect()(CitySelect)
