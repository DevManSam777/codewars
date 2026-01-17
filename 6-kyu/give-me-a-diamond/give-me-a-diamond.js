function diamond(n){
  if (n < 1 || n % 2 === 0){
    return null;
  } 
  
  
​
  let spaces = Math.floor(n/2)
  let stars = 1
  let string = ''
  
  do{
    string += (' ').repeat(spaces) +  '*'.repeat(stars) +'\n'
    stars +=2;
    spaces--;
  } while(stars <= n)
  
    stars -= 2
    spaces += 1
   while(stars > 1){
       stars -= 2;
       spaces ++;
       string += (' ').repeat(spaces) +  '*'.repeat(stars) +'\n'
    } 
    console.log(string)
    return string
}