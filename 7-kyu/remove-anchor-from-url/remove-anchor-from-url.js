function removeUrlAnchor(url){
  // return 
  // use replace method 
  // with a regex selecting an octothorpe followed by 0 or more alphanumeric characters
  // set the replacement value to an empty string
  return url.replace(/#\w*/, "");
}