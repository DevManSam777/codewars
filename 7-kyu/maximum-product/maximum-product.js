function adjacentElementsProduct(arr) {
  let maxProduct = arr[0] * arr[1]
  for(let i = 0; i < arr.length - 1; i++){
    let product = arr[i] * arr[i + 1];
    product > maxProduct ? maxProduct = product : maxProduct
  } return maxProduct;
}