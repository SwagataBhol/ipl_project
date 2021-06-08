"use strict";

function extraRuns(deliveries, matches) {
  var idMatches = [];
  var year1 = 2016;

  for (var index = 0; index < matches.length; index++) {
    var year = matches[index].season;

    if (year === year1) {
      if (matches[index].id in idMatches) {
        idMatches.push(matches[index].id);
      }
    }
  }

  return idMatches;
}

module.exports = extraRuns;