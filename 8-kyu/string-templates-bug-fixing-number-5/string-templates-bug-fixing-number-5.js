//function is using the rest operator with the parameter to take any number of arguments
function buildString(...template){
  // interpolation within template literal is ${} not #{}
  // need to include space after comma seperator in join method
  return `I like ${template.join(', ')}!`;
}