// @flow
import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import { connect } from 'react-redux'

const Map = ({ selectedPlaces }) => (
  <div className="map">
    <section style={{height: "100%"}}>
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
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            //onClick={props.onMapClick}}
          >
            {selectedPlaces.map((place, index) => {
              console.log(place.location.lat)
              let lat = place.location.lat,
                  lng = place.location.lng
              return (
                <Marker
                  position={
                    {
                      lat,
                      lng
                    }
                  }
                  onRightclick={() => console.log(place)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  </div>
)

export default connect(({ selectedPlaces }) => ({ selectedPlaces }))(Map)
