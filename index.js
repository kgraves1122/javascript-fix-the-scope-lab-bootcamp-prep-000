var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}

function add2(n) {
  

  // Feel free to move things around!
  const two = 2;
  return parseInt(n) + two;
}

<<<<<<< HEAD
 var funkyFunction = function () {
  return  function () {
    return "FUNKY!" ;
  }
}
=======
var funkyFunction = function() {
   return function () {
    return "FUNKY!" ;
  };
};
>>>>>>> 2f696c2dcfb0daa9745c4614ef253743740abad8

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.



<<<<<<< HEAD

var theFunk = "FUNKY!";
=======
var theFunk = funkyFunction(function())



>>>>>>> 2f696c2dcfb0daa9745c4614ef253743740abad8
