//@flow
import { searchHotels } from '../api/airbnb'

export const getHotels = (midPoint: Object) => {
  return (dispatch: Function) => {
    return searchHotels(midPoint)
      .then(results => {
        console.log('search result **: ', results)
      }).catch(console.error)
  }
}
