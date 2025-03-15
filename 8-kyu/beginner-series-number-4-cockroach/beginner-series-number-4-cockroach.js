function cockroachSpeed(s) {
  // 100,000 cm === 1 km  
  // 1 hour === 60 minutes
  // 1 minute === 60 seconds
  // 1 hour === 3600 seconds
  // 1 km/h === (100,000 cm) / (3,600 s)
  return Math.floor(s * 100 / 3.6)
}