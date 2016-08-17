// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPlaces } from '../../../api/poi'
import CitySelect from '../CitySelect'
import AddPlace from '../AddPlaceOfInterest'

class Home extends Component {
  props: {
    config: Object,
    placesResults: Array<Object>
  }

  componentDidMount(){
    searchPlaces('sushi', 'londone')
  }

  render(){

    return (
      <div className="home">
        <h1>Home page for Find your base</h1>
        <CitySelect />
        <AddPlace />
        {this.props.placesResults.map(place => <div>{place.name}</div>)}
      </div>
    )
  }
}


const mapStateToProps = ({ placesResults }) => ({ placesResults })

export default connect(mapStateToProps)(Home)
