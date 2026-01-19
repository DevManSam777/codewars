class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(){
    const crewWeight = 1.5 * this.crew;
    return this.draft - crewWeight > 20 ? true : false
  }
  
}