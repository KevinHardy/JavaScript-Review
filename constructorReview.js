//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function(name, age, height, gender) {
  var personObj = {
    personObj.name = name;
    personObj.age = age;
    personObj.height = height;
    personObj.gender = gender;
  };
  return personObj;
}

//Create a animal array and a person array.

  //code here
var animalArr = [];
var personArr = [];

//Create two instances of Animal and push those into your animal array

  //code here
var Elephant = new Animal('mammal', 'Effy' 4, 'grey', ['straw', 'grass', 'fruit']);
var Monkey = new Animal('mammal', 'Fred', 2, 'brown', ['nuts', 'berries']);

//Create two instances of person and push those into your person array.

  //code here
var Kevin = new person('Kevin', 25, '6\"1\'', 'male');
var Kelly = new person('Kelly', 25, '5\"11\'', 'female');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  alert(this.name + ' ate ' + this.food[food[Math.floor(Math.random() * ((food.length - 1) - 0) + 0)]]);
};

//At this point, if we wanted to add something to every instance of person could we? 

  //Yes or no? and why or why not?

//no because it isn't a constructor class so it can't use the prototype method


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  it creates a new instance of that constructor
  2) What's a good way to describe the keyword 'this'
  'this' is basically a translator, so when your new instance of a constructor is called, the constructor will translate the name of the new instance into where 'this' is so that the variables within the new object can be defined easily
  3) Can a normal function which creates an object and then returns that object use the prototype?
  no
  4) What happens if you forget to use 'new' when calling a constructor?
*/