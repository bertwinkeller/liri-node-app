// Reads environment variables in dotenv package
require("dotenv").config();



// imports keys.js file and stores it in a variable 
var keys = require("./keys.js");

// spotify key with your information to run requests
var spotify = new Spotify(keys.spotify);

let command = process.argv[2]

switch(command){
    case "concert-this":


    break;
    case "spotify-this-song":


    break;
    case "move-this":

    break;
    case "do-what-it-says":


    break;
}
