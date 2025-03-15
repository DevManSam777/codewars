function greet(language) {
  // converted to object database
  let greeting = {
    "english": "Welcome",
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso"
  }
​
  // return ternary operation 
  // if language is present in the greeting object
  // return greeting in that language
  // else default to english
  return greeting.hasOwnProperty(language)  ? greeting[language] : greeting["english"]; 
}