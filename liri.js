require("dotenv").config();
var Twitter =require("twitter")
var Spotify = require("node-spotify-api")
var Request = require("request")
var FS = require("fs")

var spotify = new Spotify(keys.spotify);

var keys = require("./key")
var decision = process.argv[2]
var call = process.argv[3]

switch(decision){
    case "my-tweets":

    break;
    case `spotify-this-song`:

    break;
    case `movie-this`:

    break;
    case `do-what-it-says`:

    break;
    default:
    console.log("this is not a valid command")
}

function tweets (){
    var client = new Twitter(keys.twitter);
    client.get ("statuses/user_timeline", function(error, tweets, response)
    {
    if(error) throw error;
    console.log(tweets);
    console.log(response);
});
}
