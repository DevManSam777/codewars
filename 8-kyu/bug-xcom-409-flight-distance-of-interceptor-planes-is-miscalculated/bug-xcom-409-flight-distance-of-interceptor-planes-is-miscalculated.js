// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const NAUTICAL_MILE_TO_KM = 1.852; // Correct conversion factor
  const travelHours = travelTime / 60;
  const travelNauticalMiles = avgSpeed * travelHours; // Calculate nautical miles
  const travelKms = travelNauticalMiles * NAUTICAL_MILE_TO_KM; // Convert to kilometers
​
  return travelKms;
}