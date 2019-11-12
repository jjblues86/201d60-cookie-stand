'use strict';

// Array of store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Array of store locations
var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];


var storeOne = {
  location : 'Seattle',
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  hourlyCust : [],
  hourlyCookies : [],
}

function cookiesHourly(min, max){
  return Math.floor(Math.random() * (max - min)) + min;

}

var storeTwo = {
  location : 'Tokyo',
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
}

var storeThree = {
  location : 'Dubai',
  minCust : 11,
  maxCust : 38,
  avgCookieSale : 3.7,
}

var storeFour = {
  location : 'Paris',
  minCust : 20,
  maxCust : 38,
  avgCookieSale : 2.3,
}

var storeFive = {
  location : 'Lima',
  minCust : 2,
  maxCust : 16,
  avgCookieSale : 4.6,
}

// Randomize function


// Get the parent element where you'll be appending all the other elements in
var mainEl = document.getElementById('stores');

// Creating an article element
var article = document.createElement('article');
mainEl.appendChild(article);

// Creating a h3 element tag Seattle
var h3 = document.createElement('h3');
h3.textContent = storeOne.location;
article.appendChild(h3);


// Creating a ul element tag 
var ul = document.createElement('ul');
// var p = document.createElement('p');
article.appendChild(ul);
// article.appendChild(p);
var totalSales = 0;
for(var i = 0; i < openHours.length; i++){
  var total = Math.ceil(cookiesHourly(storeOne.maxCust, storeOne.minCust) * storeOne.avgCookieSale);
  totalSales += total;
  var li = document.createElement('li');
  li.textContent = openHours[i] + ': ' + total + ' cookies';
  ul.appendChild(li);
}
li.textContent = 'Total: ' + totalSales;

// Creating a h3 element tag Tokyo
var secondH3 = document.createElement('h3');
secondH3.textContent = storeTwo.location;
article.appendChild(secondH3);


// Creating a ul element tag 
var ul2 = document.createElement('ul');
// var p = document.createElement('p');
article.appendChild(ul2);
// article.appendChild(p);
var totalSold = 0;
for(var j = 0; j < openHours.length; j++){
  var totals = Math.ceil(cookiesHourly(storeTwo.maxCust, storeTwo.minCust) * storeOne.avgCookieSale);
  totalSold += totals;
  var lis = document.createElement('li');
  lis.textContent = openHours[j] + ': ' + totals + ' cookies';
  ul2.appendChild(lis);
}
lis.textContent = 'Total: ' + totalSold;


// Creating a h3 element tag Dubai
var thirdH3 = document.createElement('h3');
thirdH3.textContent = storeThree.location;
article.appendChild(thirdH3);


// Creating a ul element tag 
var ul3 = document.createElement('ul');
// var p = document.createElement('p');
article.appendChild(ul3);
// article.appendChild(p);
var totalSell = 0;
for(var x = 0; x < openHours.length; x++){
  var result = Math.ceil(cookiesHourly(storeThree.maxCust, storeThree.minCust) * storeThree.avgCookieSale);
  totalSell += result;
  var liEl = document.createElement('li');
  liEl.textContent = openHours[x] + ': ' + result + ' cookies';
  ul3.appendChild(liEl);
}
liEl.textContent = 'Total: ' + totalSell;


// Creating a h3 element tag Paris
var fourthH3 = document.createElement('h3');
fourthH3.textContent = storeFour.location;
article.appendChild(fourthH3);


// Creating a ul element tag 
var ul4 = document.createElement('ul');
// var p = document.createElement('p');
article.appendChild(ul4);
// article.appendChild(p);
var totalSells = 0;
for(var b = 0; b < openHours.length; b++){
  var results = Math.ceil(cookiesHourly(storeFour.maxCust, storeFour.minCust) * storeFour.avgCookieSale);
  totalSells += result;
  var liEls = document.createElement('li');
  liEls.textContent = openHours[b] + ': ' + results + ' cookies';
  ul4.appendChild(liEls);
}
liEls.textContent = 'Total: ' + totalSells;


// Creating a h3 element tag Lima
var fifthStore = document.createElement('h3');
fifthStore.textContent = storeFive.location;
article.appendChild(fifthStore);


// Creating a ul element tag 
var ul5 = document.createElement('ul');
article.appendChild(ul5);
var totalSale = 0;
for(var c = 0; c < openHours.length; c++){
  var final = Math.ceil(cookiesHourly(storeFive.maxCust, storeFive.minCust) * storeFive.avgCookieSale);
  totalSale += final;
  var liEl5 = document.createElement('li');
  liEl5.textContent = openHours[c] + ': ' + final + ' cookies';
  ul5.appendChild(liEl5);
}
liEl5.textContent = 'Total: ' + totalSale;
