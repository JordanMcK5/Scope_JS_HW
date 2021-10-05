function sayHello(greeting, name = "World"){
    return `${greeting} ${name}`;
}
console.log(sayHello("Hello"));

var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log("1 + 3 with add", add(1, 3));

function Total(numbers) {
    var total = 0;
    for (var number of numbers) {
      total += number;
    }
    return total;
  }
  
  var sum = Total([5, 10, 15, 20]);
  console.log('total of numbers is:', sum);

  var objectHasKey = function (object, searchString) {
    for (var key in object) {
      if (searchString === key) {
        return true;
      }
    }
    return false;
  }
  
  var person = {
    name: 'Wojtek',
    age: 30
  };
  
  var keyIsFound = objectHasKey(person, 'name');
  var keyNotFound = objectHasKey(person, 'email');
  
  console.log('keyIsFound - should be true:', keyIsFound);
  console.log('keyNotFound - should be false:', keyNotFound);


var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(multiply(2,5));

// Named function declarations - 
function functionName () {}
// Anonymous functions - 
var functionName = function () {}
// Arrow functions - 
var functionName = () => {}