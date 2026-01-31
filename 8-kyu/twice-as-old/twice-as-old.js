function twiceAsOld(dadYearsOld, sonYearsOld) {
  let yearsAgo = 0;
  
  if(dadYearsOld > 2 * sonYearsOld){
    while(dadYearsOld != 2 * sonYearsOld){
      dadYearsOld++;
      sonYearsOld++;
      yearsAgo++
    } 
  } else {
      while(dadYearsOld < 2 * sonYearsOld){
        dadYearsOld--;
        sonYearsOld--;
        yearsAgo++;
      }
    } return yearsAgo;
}