// @flow
import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";
import { connect } from 'react-redux'
import { setCity } from '../../actions/city'
import { midPointCalc } from '../../reducers/placesResults'
import { searchHotels } from '../../api/airbnb'

const inputStyle = {
  "border": `1px solid transparent`,
  "borderRadius": `1px`,
  "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
  "boxSizing": `border-box`,
  "MozBoxSizing": `border-box`,
  "fontSize": `14px`,
  "height": `32px`,
  "marginTop": `27px`,
  "outline": `none`,
  "padding": `0 12px`,
  "textOverflow": `ellipses`,
  "width": `400px`,
}

class Map extends Component {
  handlePlacesChanged() {
    const places = this.refs.searchBox.getPlaces()
    this.props.setCity({
      ...places[0],
      position: {
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng()
      }
    })
  }
  render(){
    const { selectedPlaces, city, midPoint } = this.props
    var defaultCenter = { lat: -25.363882, lng: 131.044922 }
    console.log(midPoint)
    
    return (
      <div className="map">
        <section style={{height: "500px"}}>
          <GoogleMapLoader
            containerElement={
              <div
                style={{
                  height: "100%",
                }}
              />
            }
            googleMapElement={
              <GoogleMap
                center={city.position ? city.position : defaultCenter}
                ref={(map) => console.log(map)}
                defaultZoom={11}
                defaultCenter={defaultCenter}
                //onClick={props.onMapClick}}
              >
                <SearchBox
                  bounds={null}
                  controlPosition={google.maps.ControlPosition.TOP_LEFT}
                  onPlacesChanged={this.handlePlacesChanged.bind(this)}
                  ref="searchBox"
                  placeholder="Customized your placeholder"
                  style={inputStyle}
                />
                {selectedPlaces.map((place, index) => {
                  return (
                    <Marker
                      position={
                        {
                          lat: place.location.lat,
                          lng: place.location.lng
                        }
                      }
                      onRightclick={() => console.log(place)} />
                  );
                })}
                <Marker
                      position={
                        midPoint
                      }
                      onRightclick={() => console.log(place)} />
              </GoogleMap>
            }
          />
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedPlaces, city, midPoint }) =>
  ({
    selectedPlaces,
    city,
    midPoint
  })

export default connect(mapStateToProps, { setCity })(Map)
