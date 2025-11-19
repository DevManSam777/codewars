function isTriangle(a,b,c)
{
  // note: the two legs must be larger than the hypotenuse
  //  (leg1 + leg2 >= hypotenuse)
  // first check to see that all of the sides are positive
  // we need to add a+b and see if they are larger than c,
  // next we need to see if a+c is larger than be
  // nest we need to see if b+c is larger than a
  // if these are ALL true than we need to return true
  // else false
  
  return a > 0 && b > 0 && c > 0 && 
         a + b > c && a + c > b && b + c > a;
}