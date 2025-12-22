class Ghost {
  constructor() {
    let randomNum = Math.ceil(Math.random() * 4);
    if(randomNum === 1) {
      this.color = "white";
    } else if(randomNum === 2) {
      this.color = "yellow";
    } else if(randomNum === 3) {
      this.color = "purple";
    } else {
      this.color = "red";
    }
  }
}
​