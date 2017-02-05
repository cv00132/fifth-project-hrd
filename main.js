function $(id) { return document.getElementById(id); };


//1. Show me how to calculate the average price of all items.
var answerBox1 = $("answer1");
//x=items[i]
var sum = 0;
items.forEach(function addNumber(x) {sum += x.price; });

answerBox1.innerHTML = "The average price is $" + (sum/items.length).toFixed(2);


//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answerBox2 = $("answer2");

var between = function(x) {return x.price > 14 && x.price < 18};
var titles = function (x) {return answerBox2.innerHTML += "<p>" + x.title + "</p>";};

items.filter(between).forEach(titles);

var title

//3. Which item has a "GBP" currency code? Display it's name and price.
var answerBox3 = $("answer3");
var isBrit = "";

items.forEach(
  function isBritish (x) {
    if (x.currency_code.includes("GBP")){
    isBrit += x.title + " " + "&pound" + x.price;
    }
  }
);

answerBox3.innerHTML += isBrit;

//4. Display a list of all items who are made of wood.
/*
var answerBox4 = $("answer4");

var wooden = items.filter(
  function (x) {
    return x.materials.include("wood")
  }
).forEach(
  function (x)
)
*/
