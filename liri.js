// Node modules needed for functions to work
var fs = require('fs');
var request = require("request");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api')
var keys = require('./keys.js');

// console.log(keys)
// console.log(keys.consumer_key)

// Variable to call the instance of twitter and to call to node modules and to keys.js to protect info.
var client = new Twitter({
			consumer_key: keys.twitterKeys.consumer_key,
  			consumer_secret: keys.twitterKeys.consumer_secret,
  			access_token_key: keys.twitterKeys.access_token_key,
  			access_token_secret: keys.twitterKeys.access_token_secret		
  		});
if(process.argv[2] === "my-tweets"){
// Parameters for twitter function
var params = {screen_name: "knucklesjak", count: 20};
e
// Calling on twitter what info to pull from tweet history
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	console.log("-----------------------");
  	for (var i = 0; i < tweets.length; i++) {
  	console.log("------------------------");
    console.log(tweets[i].created_at);
    console.log(tweets[i].text);
	}
  }
}); 
} 

else if (process.argv[2] === 'spotify-this-song'){
var song = process.argv[3]
if(song === undefined){
	song = "All the small things"
}


// Variable to call on the instance of spotify
var spotify = new Spotify({
  id: keys.spotifyKeys.client_id,
  secret: keys.spotifyKeys.client_secret
});
 
spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 //  	// var chicken = data.tracks.items
 // 	for (var i = 0; i < chicken.length; i++) {
 // 		console.log(chicken[i].album.name);
 // 		console.log(chicken[i].album.href);
 // 	}
	// console.log(data); 	
	console.log(data.tracks.items[0].album.name) //album name
	console.log(data.tracks.items[0].album.artists[0].name)
	console.log(data.tracks.items[0].album.href)
	console.log(song)
});
}
