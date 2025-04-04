const greet = require('./greet') // allows us to import the greet module
const { person1 , person2 , person3} = require("./peoples") ;

console.log(person1) ;
console.log(person2) ;
console.log(person3) ;
greet("how are you?") ;

greet(person1) ;
greet(person2) ;
greet(person3) ;