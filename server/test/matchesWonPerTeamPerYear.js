function matchesWonPerTeamPerYear(matches){
    let array= new Object()
    let obj=new Object()
    let counter=0
    for(let index=0;index<matches.lenght;index++){
       
        
       let year=matches[index].season
       let win=matches[index].winner
       
       if (year in array){
            if(win in array[year]){
                counter+=1
                obj[win]=counter
                array[year]=obj
                
                
            }
            // else{
            //     counter=1
            //     obj[win]=counter
            //     array[year]=obj
            // }
            
       }
       
        else{
            obj={}
            counter=1
            obj[win]=counter
            array[year]=obj
        }
    }
    
    return array
}
module.exports=matchesWonPerTeamPerYear