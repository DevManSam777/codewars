function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
      let secondNum = target - numbers[i];
      if(numbers.indexOf(secondNum) != -1 &&  numbers.indexOf(secondNum) != i){
        return [i, numbers.indexOf(secondNum)];
      }
    }
}