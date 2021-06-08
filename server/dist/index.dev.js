"use strict";

var CSVToJSON = require('csvtojson');

var matches = "../data/matches.csv";
var deliveries = "../data/deliveries.csv";
CSVToJSON().fromFile(matches).then(function (matches) {
  CSVToJSON().fromFile(deliveries).then(function (deliveries) {
    // const matchesPerYear=require("./test/matchesPerYear")
    // let test1=matchesPerYear(matches)
    var matchesWonPerTeamPerYear = require("./test/matchesWonPerTeamPerYear");

    var test2 = matchesWonPerTeamPerYear(matches);
    console.log(test2); // const extraRuns=require("./test/extraRuns")
    // let test1=extraRuns(deliveries,matches)
  });
});