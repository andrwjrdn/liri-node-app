require("dotenv").config();

//Global Variables

var keys = require('.keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var request = require('request');
var moment = require('moment');
var spotify = new spotify(keys.spotify);
var axios = require('axios');
var arg = process.argv;
var command = process.argv[2];
var reference = [];
var songs = '';
var movies = '';
var artists = '';
var filename = 'log.txt';
var fullCommand = [];

//For loop for getting reference to accept several words in array

for (var i = 3; i < arg.length; i++) {
  reference.push(arg[i])
}

var referenceName = reference.join('');

//Logging the fullCommand variable

fullCommand.push(command);
if(reference.length !=0) {
  fullCommand.push(referenceName);
}

//FUNCTIONS

//Logging Function

function logging(value){
  fs.appendFile(filename, ', '+ value, function(err) ) {
    if (err) {
      return console.log('ERROR, TRY AGAIN!');
    }
  }
}
logging(fullCommand);

//Function for concert-this

function concert (referenceName) {
  var bandUrl = "https://rest.bandsintown.com/artists/" + referenceBand + "/events?app_id=codingbootcamp";
  axios.get(bandUrl).then(
    function (response) {
      console.log('  ');
      console.log('-------GETTING---BAND/ARTIST---INFO:')
      for (var i = 0; i < response.data.length; i++) {
        //datetime stored in a variable
        var datetime = response.data[i].datatime;

        //this variable splits date and time
        var dateArr = datetime.split('T');
        
        //variable to show results of show/concert with date and time split up
        var concertResults =
        '-------------------------------------------------------------------------' +
        '\nVenue Name: ' + response.data[i].venue.name +
        '\nVenue Location: ' + response.data[i].venue.city +
        '\nDate of the Event: ' + moment(dateArr[0], 'YYYY-DD-MM').format('DD/MM/YYYY'); 
        console.log(concertResults);
        console.log(concert);
      }
      concert();

    })
    .catch(function(error) {
      console.log('Here is the error: ' + error);
    })
}


//Function for spotify-this 

//Function for movie-this

//Function for do-what-it-says
