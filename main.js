//1. Show me how to calculate the average price of all items.
var answerBox1 = document.getElementById("answer1");
//x=items[i]
var sum = 0;
items.forEach(
    function addNumber(x) {
      sum += x.price; }
);

answerBox1.innerHTML = "The average price is $" + (sum/items.length).toFixed(2);

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answerBox2 = document.getElementById("answer2");
var mid_price = items.filter(
  function(x) {
    return x.price > 14 && x.price < 18
  }).forEach(function (x) {
      return answerBox2.innerHTML += "<p>" + x.title + "</p>";
  })


//3. Which item has a "GBP" currency code? Display it's name and price.
var answerBox3 = document.getElementById("answer3");
var isBrit = "";

items.forEach(
  function isBritish (x) {
    if (x.currency_code.includes("GBP")){
    isBrit += x.title + " " + "&pound" + x.price;
    }
  }
);

answerBox3.innerHTML += isBrit;
