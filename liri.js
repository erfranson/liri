var twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');
var keys = require('./keys.js');
var moment = require('moment')
var client = keys.client;
var action = process.argv[2];

switch (action) {
	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	spotifyThis();
	break;

	case "movie-this":
	movieThis();
	break;

	case "do-what-it-says":
	doWhat();
	break;
};

function myTweets() {
	var params = {screen_name: 'Alwzreadytotub'};
keys.client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for(var i = 0; i < tweets.length; i++){
  		var date = moment(tweets[i].created_at).format('MMM-Do-YYYY');
  		var text = JSON.stringify(tweets[i].text);
  		console.log("On: "+ date + "\nYou tweeted: "+ text);
  	}
    
  }
});

};
function spotifyThis() {
	
};
function movieThis() {
	
};
function doWhat() {
	
};

myTweets();

// console.log(keys.client);

