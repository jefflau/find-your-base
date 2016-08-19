// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPlaces }  from '../../actions/places'

class AddPlaceOfInterest extends Component {

  state: {
    value: string
  }

  timeoutId: number

  constructor(props){
    super(props)
    this.state = {
      value: ""
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    clearTimeout(this.timeoutId)
    this.timeoutId = setTimeout(()=>{
      console.log('ajax')
      this.props.handleSearch(this.state.value, this.props.city.position)
    }, 200)

  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} value={this.state.value}/>
      </div>
    )
  }
}

export default connect(({ placesResults, city }) => ({ placesResults, city }), { handleSearch: searchPlaces })(AddPlaceOfInterest)
