// Node modules needed for functions to work
var fs = require('fs');
var request = require("request");
var Twitter = require("twitter");
var Spotify = require('node-spotify-api')
var keys = require('./keys.js');

// console.log(keys)
// console.log(keys.consumer_key)

// Function and console logs to capture user input
// console.log("Type 'my-tweets', 'spotify-this-song', 'movie-this', or 'do-what-it-says' to perform your search!");
// choses actions (process.argv[2]) and the search parameter called (process[3])
var firstCommand = process.argv[2];
var secondCommand = process.argv[3];
	// for loop in case user types in multiple commands
	for(i = 4; i < process.argv.length; i++) {
		secondCommand += "+" + process.argv[i];
	}

// Switch function to tell which action needs to be called
	function theSwitch() {
		switch(firstCommand) {
			case 'my-tweets':
			getTweets();
			break;

			case 'spotify-this-song':
			mySpotify();
			break;

			case 'movie-this':
			myMovie();
			break;

			case 'do-what-it-says':
			newSpotify()
			break;
		}
	};



// Variable to call the instance of twitter and to call to node modules and to keys.js to protect info.
function getTweets(){
	console.log("Get ready for my tweets!");
	var client = new Twitter({
				consumer_key: keys.twitterKeys.consumer_key,
	  			consumer_secret: keys.twitterKeys.consumer_secret,
	  			access_token_key: keys.twitterKeys.access_token_key,
	  			access_token_secret: keys.twitterKeys.access_token_secret		
	  		});

// Parameters for twitter function, calling on last 20 tweets
	var params = {screen_name: "knucklesjak", count: 20};

// Calling on twitter what info to pull from tweet history
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	console.log("-----------------------");
	  	for (var i = 0; i < tweets.length; i++) {
	  	console.log("------------------------");
	    console.log(tweets[i].created_at);
	    console.log(tweets[i].text);
		}
	  };
	}); 
}; /// end of getTweets function



// else if (process.argv[2] === 'spotify-this-song'){
// var song = process.argv[3]
// if(song === undefined){
// 	song = "All the small things"
// }


// Function for spotify
function mySpotify() {
	console.log("Check out this song!");

	// Variable to call on the instance of spotify and set default of chosen song undefined
	var spotify = new Spotify({
	  id: keys.spotifyKeys.client_id,
	  secret: keys.spotifyKeys.client_secret
	});

	var searchMusic;
		if(secondCommand === undefined) {
			searchMusic = "I Want it That Way";
		} else {
			searchMusic = secondCommand;
		};

	 // starts the spotify search
	spotify.search({ type: 'track', query: searchMusic }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
		
		console.log(data.tracks.items[0].album.name) //album name
		console.log(data.tracks.items[0].album.artists[0].name)
		console.log(data.tracks.items[0].album.href)
		console.log(song)
	});
}



function myMovie() {

	var searchMovie;
	if(secondCommand === undefined) {
		searchMovie = "Mr. Nobody";
	} else {
		searchMovie = secondCommand;
	};

	var queryUrl = "http://www.omdbapi.com/?t=" + searchMovie + "&y=&plot=short&apikey=40e9cece"; 
	request(queryUrl, function(error, response, body) {
		if(!error && response.statusCode === 200){
			console.log("Title: " + JSON.parse(body)["Title"]);
			console.log("Year: " + JSON.parse(body)["Year"]);
			console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
			console.log("Country: " + JSON.parse(body)["Country"]);
	        console.log("Language: " + JSON.parse(body)["Language"]);
	        console.log("Plot: " + JSON.parse(body)["Plot"]);
	        console.log("Actors: " + JSON.parse(body)["Actors"]);
	        console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
		}
	});

}; /// end of myMovie function

theSwitch(); 