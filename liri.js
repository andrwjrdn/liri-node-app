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