// @flow

import 'fetch-everywhere';

const client_id = 'JAQA3H4SH0KBR3TZD2O3XEBIVZHACVQURGJ10L4PWXMKNCAB'
const client_secret = 'XIG2UGSNVYDQUAAGJBIFQCWH4L4VYI5UGFOMBRWXX5H4FOCJ'
const version = '20160801'
const rootUrl = 'https://api.foursquare.com/v2'
const searchPlaceUrl = '/venues/search'

const credentials = `client_id=${client_id}&client_secret=${client_secret}&v=${version}&`

export function searchPlaces(query: string, location: Object) {
  return fetch(`${rootUrl}${searchPlaceUrl}?${credentials}query=${query}&ll=${location.lat},${location.lng}`, { type: 'get'})
    .then(res => res.json())
    .then(res => res.response.venues)
}
