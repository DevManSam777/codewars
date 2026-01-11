class Block{
 
  constructor(arr){
    this.width = arr[0];
    this.length = arr[1];
    this.height = arr[2];
  }
  
  getWidth(){
    return this.width;
  }
  getLength(){
     return this.length;
  }
  getHeight(){
    return this.height;
  }
  getVolume(){
    return this.length * this.width * this.height;
  }
  getSurfaceArea(){
      return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
  }
}