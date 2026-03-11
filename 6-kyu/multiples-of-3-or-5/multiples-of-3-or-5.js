function solution(number){
  if(number < 3){
    return 0
  }
  let sum = 0;
  let i = 0;
  while(i < number){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i
    }
    i++;
  }return sum
}