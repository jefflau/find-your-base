import itunesAPI from './itunesAPI'
import feedRead from 'feed-read'

Meteor.methods({
  connected(){
    return 'getting data from meteor!'
  },
  searchPodcasts(searchTerm){
    return itunesAPI.searchPodcasts(searchTerm)
  },
  getEpisodes(feedUrl){
    return fetch(feedUrl, { method: 'get'})
      .then(res => res.body)
      .then(data => console.log(data))
  }
})
