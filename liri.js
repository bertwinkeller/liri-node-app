// Reads environment variables in dotenv package
require("dotenv").config();

// imports keys.js file and stores it in a variable 
var keys = require("./keys.js");

// spotify key with your information to run requests
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


// sets process arguments for command line reference
let command = process.argv[2]
let title = process.argv.slice(3).join(' ')

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
            console.log(song)
            let artist_object = data.tracks.items[0];
console.log(`*------------------------------------*
Artist: ${artist_object.artists[0].name}
Song Name: ${artist_object.name}
Preview Link: ${artist_object.preview_url}
Album Name: ${artist_object.album.name}
*------------------------------------*
`
                         );
        });


break;
    case "movie-this":

        
        if(!title){
            movie = 'Mr.Nobody';
        }else{
            movie = title;
        }
        let url2 = `http://www.omdbapi.com/?apikey=trilogy&t=${movie}`
        axios.get(url2)
        .then(function (response) {
       
          // handle success
          
          
          let movie_info = response.data;
          console.log(`
          *----------------------------------*
          Title: ${movie_info.Title}
          Year Released: ${movie_info.Released}
          IMDB Rating: ${movie_info.Ratings[0].Value}
          Rotten Tomatotes Rating: ${movie_info.Ratings[1].Value}
          Countries Produced: ${movie_info.Country}
          Language: ${movie_info.Language}
          Plot: ${movie_info.Plot}
          Actors: ${movie_info.Actors}
          *----------------------------------*
          `)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
break;
    case "do-what-it-says":


break;
}
