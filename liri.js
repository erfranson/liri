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
 	//use hyphens when looking for song ex: hey-ya
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
	
};
function doWhat() {
	
};


// console.log(keys.client);

