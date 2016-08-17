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
      this.props.handleSearch(this.state.value, 'taipei')
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

const mapStateToProps = ({ placesResults}) => ({
  placesResults
})

export default connect(mapStateToProps, { handleSearch: searchPlaces })(AddPlaceOfInterest)
