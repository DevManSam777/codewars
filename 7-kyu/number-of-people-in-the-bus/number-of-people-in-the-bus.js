var number = function(busStops){
  // create variables to store values for on and off
  let on = 0;
  let off = 0;
  // busStops is an array with an unknown number of subarrays.  
  // each subarray has two indices.  
  // the first index is on
  // the second is off
  // iterate through the busStops array and update the on and off values
  for (let i = 0; i < busStops.length; i++){
    on += busStops[i][0];
    off += busStops[i][1];
  }
  return on - off;
}