function solve(s){
    if(s.toLowerCase() === s || s.toUpperCase() === s){
        return s;
    } else {
        let lowerCount = s.match(/[a-z]/g).length
        let upperCount = s.match(/[A-Z]/g).length
        return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase() 
    }   
}
​