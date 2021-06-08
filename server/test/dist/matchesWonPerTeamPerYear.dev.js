"use strict";

function matchesWonPerTeamPerYear(matches) {
  var array = new Object();
  var obj = new Object();
  var counter = 0;

  for (var index = 0; index < matches.lenght; index++) {
    var year = matches[index].season;
    var win = matches[index].winner;

    if (year in array) {
      if (win in array[year]) {
        counter += 1;
        obj[win] = counter;
        array[year] = obj;
      } // else{
      //     counter=1
      //     obj[win]=counter
      //     array[year]=obj
      // }

    } else {
      obj = {};
      counter = 1;
      obj[win] = counter;
      array[year] = obj;
    }
  }

  return array;
}

module.exports = matchesWonPerTeamPerYear;