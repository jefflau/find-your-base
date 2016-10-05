// @flow
import 'fetch-everywhere'

function searchHotels ({lat, lng}) {

    var baseUrl = `https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty
                  &user_lat=${lat}
                  &user_lng=${lng}`;

    return fetch(baseUrl, {method: 'GET', mode: 'no-cors'});

}

Meteor.methods({
    searchHotels
})
