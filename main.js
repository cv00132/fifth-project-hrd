function $(id) { return document.getElementById(id); };

//1. Show me how to calculate the average price of all items.
var answerBox1 = $("answer1");
//x=items[i]
var sum = 0;
items.forEach(function addNumber(x) {sum += x.price; });

answerBox1.innerHTML = "The average price is $" + (sum/items.length).toFixed(2);


//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answerBox2 = $("answer2");

var between = function (x) {return x.price > 14 && x.price < 18};
var titles = function (x) {return answerBox2.innerHTML += "<p>" + x.title + "</p>";};

items.filter(between).forEach(titles);


//3. Which item has a "GBP" currency code? Display it's name and price.
var answerBox3 = $("answer3");

var isBritish = function (x) { return x.currency_code.includes("GBP")};
var post = function (x) {return answerBox3.innerHTML += x.title + " " + "&pound" + x.price;};

items.filter(isBritish).forEach(post);

//4. Display a list of all items who are made of wood.
var answerBox4 = $("answer4");

var wooden = function (x) {return x.materials.includes("wood")};
var results = function (x) {return answerBox4.innerHTML += "<p>" + x.title + " is made of wood." + "</p>"};

items.filter(wooden).forEach(results);

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var answerBox5 = $("answer5");

var mulMaterials = function (x) {return x.materials.length > 7};
var list = function (x) { return answerBox5.innerHTML += "<p>" + x.title + " has " + x.materials.length + " materials.</p>" + "<ul>" + x.materials + "</ul>";}

items.filter(mulMaterials).forEach(list);

//6. How many items were made by their sellers?
var answerBox6 = $("answer6");
var newArray = 0;

var madeSellers = function (x) { return newArray += x.who_made.includes("i_did")};
var homeMade = function (x) {return answerBox6.innerHTML = "<p>" + newArray + " were made by their sellers." + "</p>"};

items.filter(madeSellers).forEach(homeMade);
