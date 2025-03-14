function isTriangle(a,b,c)
{
  // check for non-positive sides
   if (a <= 0 || b <= 0 || c <= 0) {
    return false; 
  }
  
   // not a valid triangle check.  a valid triangle would be ex. a + b > c
   if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
   return true
}