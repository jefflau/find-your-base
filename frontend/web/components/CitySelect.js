import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'city' ]

class CitySelect extends Component {
  render() {
    const {fields: { city }} = this.props;
    return (
      <div>
        <h2>Where are you going?</h2>
        <input type="text" {...city}/>
      </div>
    )
  }
}

export default reduxForm({
  form: 'city',
  fields
})(CitySelect)
