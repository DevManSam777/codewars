function switcheroo(x){
 return x.replace(/b/g,'!').replace(/a/g, '%').replace(/%/g, 'b').replace(/!/g, 'a')
}