function matchesPerYear(matches){
    let result=new Object()
    let counter
    for(let index=0;index<matches.length;index++)
    {
        
        const year= matches[index].season
        
        if(year in result)
        {
           counter+=1
            result[year]=counter
        }
       else{
           counter=1
        result[year]=counter
       }
        
    }
    let key=Object.keys(result)
    let value=Object.values(result)
    array=[]
    for(let index=0;index<key.length;index++){
        let object={"season":key[index],"matches_played_per_year":value[index]}
        array.push(object)
        
    }
    return array
}
module.exports=matchesPerYear