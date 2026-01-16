function solve(s){
 return [/[A-Z]/, /[a-z]/, /\d/, /[^a-zA-Z0-9]/].map(x => s.split(x).length - 1) 
}