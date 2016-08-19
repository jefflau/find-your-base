// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CitySelect from '../CitySelect'
import AddPlace from '../AddPlaceOfInterest'
import PlacesResults from '../PlacesResults'
import SelectedPlaces from '../SelectedPlaces'
import Map from '../Map'

class Home extends Component {
  props: {
    config: Object,
    placesResults: Array<Object>
  }

  render(){

    return (
      <div className="main-content">
        <h1>Home page for Find your base</h1>
        <CitySelect />
        <AddPlace />
        <PlacesResults />
        <SelectedPlaces />
        <Map />
      </div>
    )
  }
}


const mapStateToProps = ({ placesResults }) => ({ placesResults })

export default connect(mapStateToProps)(Home)
