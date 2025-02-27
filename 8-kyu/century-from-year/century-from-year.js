function century(year) {
  // use math ceil to round up to next integer if any value above 00 in tens and ones place divide the year by 100 to remove two trailing 0's
  return Math.ceil(year/100);
}