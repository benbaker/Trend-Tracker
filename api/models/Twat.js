/**
* Twat.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var twitter = require('twitter')

var auth = require("../../auth.js")

var twit = new twitter(auth.twitter);

var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]
var myLocation = sanFrancisco

twit.stream('statuses/filter', { locations: myLocation }, function(stream) {
    stream.on('data', function(data) { 
      Twat.publishCreate(data, function(err,twt){
        console.log(twt)
      })
    });
    stream.on('error', function(data){ console.log(data) })
});





module.exports = {

  attributes: {

  }
};

