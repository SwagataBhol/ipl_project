const CSVToJSON = require('csvtojson');

const matches="../data/matches.csv"

const deliveries="../data/deliveries.csv"



CSVToJSON().fromFile(matches)
    .then( matches=> {

       
        CSVToJSON().fromFile(deliveries)
    .then( deliveries=> {
        
        // const matchesPerYear=require("./test/matchesPerYear")
        // let test1=matchesPerYear(matches)

        const matchesWonPerTeamPerYear=require("./test/matchesWonPerTeamPerYear")
        const test2=matchesWonPerTeamPerYear(matches)
        console.log(test2)

        // const extraRuns=require("./test/extraRuns")
        // let test1=extraRuns(deliveries,matches)
        

        
        

    
    });
        
    });