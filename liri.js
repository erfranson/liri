var keys = require('./keys.js');
var request = require('request');
var moment = require('moment');
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
client.get('statuses/user_timeline', params, function(error, tweets, response) {
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
	var mysong = process.argv[3]
 	//use hyphens when looking for song with multiple words ex: hey-ya
keys.spotify.search({ type: 'track', query: mysong }, function(err, data) {
  if (!err) {
  		var song = data.tracks.items[0]
    	var info ={
    		song: song.name,
    		artist: song.artists[0].name,
    		preview: song.preview_url,
    		album: song.album.name,
    		link: song.artists[0].external_urls.spotify
    	}
    	
    	if(info.preview === null){
    		info.preview = info.link;
    	}

    	console.log("Song: "+ info.song + "\nArtist: " +info.artist+ "\nAlbum: " + info.album +  "\nPreview: " + info.preview)
  } else{
  	return console.log('Error occurred: ' + err);
  }
});
};
function movieThis() {
	var movie = process.argv[3];
	// use hyphens if you are searching movie with multiple words
	
	request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
  	var query = JSON.parse(body)
	var movieInfo = {
		title: query.Title,
		year: query.Year,
		rating: query.imdbRating,
		country: query.Country,
		language: query.Language,
		plot: query.Plot,
		actors: query.Actors
	}

    console.log("Title: " + movieInfo.title + "\nYear: " + movieInfo.year + "\nRating: " + movieInfo.rating + "\nCountry: " + movieInfo.country + "\nLanguage: " + movieInfo.language + "\nPlot: " +movieInfo.plot + "\nActors: " + movieInfo.actors);
  }
});
};
function doWhat() {
	
};


