function catMouse(x){
 return x.slice(1, x.length - 1).length <= 3 
   ? "Caught!" 
   : "Escaped!"
}
​