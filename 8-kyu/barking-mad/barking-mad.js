// function Dog (breed) {
//   this.breed = breed;
// }
​
// var snoopy = new Dog("Beagle");
​
// //replace snoopy with this and move inside of constructor function
// snoopy.bark = function() {
//   return "Woof";
// };
​
// var scoobydoo = new Dog("Great Dane");
​
function Dog (breed) {
  this.breed = breed;
  
  this.bark = function() {
  return "Woof";
};
}
​
var snoopy = new Dog("Beagle");
​
//replace snoopy with this and move inside of constructor function
// snoopy.bark = function() {
//   return "Woof";
// };
​
var scoobydoo = new Dog("Great Dane");
​