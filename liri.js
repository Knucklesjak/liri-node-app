// Node modules needed for functions to work
var fs = require('fs');
var request = require("request");
var twitter = require("twitter");
var keys = require('./keys.js');

console.log(keys)
console.log(keys.consumer_key)

// Variable to call the instance of twitter and to call to node modules and to keys.js to protect info.
var client = new twitter({
			consumer_key: keys.consumer_key,
  			consumer_secret: keys.consumer_secret,
  			access_token_key: keys.access_token_key,
  			access_token_secret: keys.access_token_secret		
  		});

// Parameters for twitter function
var params = {screen_name: "knucklesjak", count: 20};


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
		
