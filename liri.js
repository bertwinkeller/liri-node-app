// Reads environment variables in dotenv package
require("dotenv").config();

// imports keys.js file and stores it in a variable 
var keys = require("./keys.js");

// spotify key with your information to run requests
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// sets process arguments for command line reference
let command = process.argv[2]
let title = process.argv[3]

// brings in axios 
var axios = require('axios');

// reference moment
var moment = require('moment');
moment().format();

switch (command) {

    case "concert-this":
        let artist = title;
        let url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        break;
    case "spotify-this-song":
        if (!title) {
            song = 'The Sign';
        } else {
            song = title;
        }
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {

                return console.log('Error occurred: ' + err);
            }

            console.log(data.tracks.items[0]);
        });


break;
    case "move-this":

break;
    case "do-what-it-says":


break;
}
