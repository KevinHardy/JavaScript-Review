//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
//Have the values to those keys be your favorite thing in that category. 

  //Your code here
var favoriteThings = {};
  favoriteThings.band = 'fun';
  favoriteThings.food = 'chocolate';
  favoriteThings.person = 'Kelly';
  favoriteThings.book = "Lord of the Rings";
  favoriteThings.movie = "Star Wars";
  favoriteThings.holiday = "Christmas";
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
favoriteThings.car = 'Mazzerati';
favoriteThings.brand = 'Townhouse';
//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here
favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';
//Now, alert your favorite person, then alert your favorite book.

  //Your code here
alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here
for (var key in user) {
  if (!user[key]) {
    delete user[key];
  }
}
//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here
user.name = 'Kevin Hardy';
user.pwHash = 'fjdska;fienf';
user.username = 'hardy95k';
//Now console.log your object and make sure it looks right.

  //Your code here
console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here
var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here
methodCollection.alertHello() {
  alert('hello');
};
methodCollection.logHello() {
  console.log('hello');
};
//Now call your alertHello and logHello methods. 

  //Your code here
alertHello();
logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, 
//and returns an object with the keys being all the vowels in that string, 
//and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(str) {
  var strObj = str.split('');
  var vowelObj = {};
  var countA = 0;
  var countE = 0;
  var countI = 0;
  var countO = 0;
  var countU = 0;
  for (var i = 0; i < strObj.length; i++) {
    if(strObj[i] === 'a') {
      countA++;
    }
    if (strObj[i] === 'e') {
      countE++;
    }
    if (strObj[i] === 'i') {
      countI++;
    }
    if (strObj[i] === 'o') {
      countO++;
    }
    if (strObj[i] === 'u') {
      countU++;
    }
  }
  if (countA > 0) {
    vowelObj.A = countA;
  }
  if (countE > 0) {
    vowelObj.E = countE;
  }
  if (countI > 0) {
    vowelObj.I = countI;
  }
  if (countO > 0) {
    vowelObj.O = countO;
  }
  if (countU > 0) {
    vowelObj.U = countU;
  }
  return vowelObj;
}

voweler("This is a test");