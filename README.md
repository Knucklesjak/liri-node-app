<h1>LIRI</h1>

### This is an introduction to node.js repo for a UC Berkeley Coding Boot Camp. I am using node.js and JS to execute command line function outside of a browser. 

LIRI executes four commands:
	1) my-tweets
	2) spotify-this-song
	3) movie-this
	4) do-what-it-says 


LINKS/Files
	Before calling on the four commands need to set up NPM links and calls to other folders. 
	* JSON package initialized. Users need to type "npm install" to initialize all
	* Keys.js - call on twitter and spotify unique keys. Typically hidden but left open for purpose of grading this project
	* gitignore - keeps node modules (and typically keys.js) hidden
	* random.txt - liri.js uses reads and writes functions to link back to this file
	* liri.js - main file that holds all functions and code.


MY-TWEETS: 
	* Uses Twitter API through NPM to pull tweet history. Set parameters to call only last 20 tweets with dates tweets were sent. 

SPOTIFY-THIS-SONG
	* Uses Spotify API through NPM to pull song data. We are asking for specific data from the whole JSON via console.log commands. If the song you request is not found it will default to "I Want it that Way"

MOVIE-THIS
	* Uses OMDB API to pull movie data. We are asking for specific data from the whole JSON via console.log commands. If the movie requested is not found it defaults to "Mr. Nobody"

DO-WHAT-IT-SAYS 
	* This function uses a read and write command to call back to the random.txt file. 

LIRI.JS
	This file holds all the code. 
