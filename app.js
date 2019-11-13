// 'use strict';

// Array of store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var hourlyCookies = [];

var tableEl = document.getElementById('stores');

var Stores = function(location, minCust, maxCust, avgCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCust = [];
  this.hourlyCookies = [];
  this.totalSales = 0;
  this.calculateCustPerHour();
  this.arrayObj();
  hourlyCookies.push(this.hourlyCookies);
}

// Calculating the total cookies sold for open hours for each store
Stores.prototype.totalCookies = function(){
  var totalCookiesSold = function(total, num){
    return total + num;
  }
  this.totalSales = this.hourlyCookies.reduce(totalCookiesSold);
}

Stores.prototype.calculateCustPerHour = function(){
  for(var i = 0; i < openHours.length; i++){
    this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
}

Stores.prototype.arrayObj = function(){
  for(var i = 0; i < openHours.length; i++){
    var cookiesPerHour = Math.round(this.avgCookies * this.hourlyCust[i]);
    this.hourlyCookies.push(cookiesPerHour);
  }
}

// Creating data for the store rows

Stores.prototype.dataRow = function(){
  this.totalCookies();
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  // data
  var tdEl = document.createElement('td');
  for(var i = 0; i < this.hourlyCookies.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookies[i];
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
  }

  // creating data for total cookies sold by each store
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);
}

var store = [];
store.push(new Stores('Seattle', 23, 65, 6.3));
store.push(new Stores('Tokyo', 3, 24, 1.2));
store.push(new Stores('Dubai', 11, 38, 3.7));
store.push(new Stores('Paris', 20, 38, 2.3));
store.push(new Stores('Lima', 2, 16, 4.6));

// table headeRow

function headerRow(){

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Cities';
  trEl.appendChild(thEl);

  for(var i = 0; i < openHours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);
}
headerRow();

// generates store table in correct order
Stores.prototype.inputData = function(){
  this.totalSales = 0;
  this.hourlyCookies = [];
  this.calculateCustPerHour();
  this.arrayObj();
  this.dataRow();
}

// creating the footer

var hourlyTotals = function(){

  var footerTr = document.createElement('tr');
  var totalName = document.createElement('th');

  totalName.textContent = 'Hourly Totals';
  footerTr.appendChild(totalName);

  // totalHourlySales

  for(var i = 0; i < openHours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < store.length; j++){
      hourlyTotal += store[j].hourlyCookies[i];
    }
    var footerTd = document.createElement('td');
    footerTd.textContent = hourlyTotal;
    footerTr.appendChild(footerTd);
  }

  // creating grand total of hourly cookies sold for all stores
  var grandTotal = 0;
  for(var k = 0; k < store.length; k++){
    grandTotal += store[k].totalSales;
  }

  var footerTotal = document.createElement('td');
  footerTotal.textContent = grandTotal + ' Grand Total';
  footerTr.appendChild(footerTotal);
  tableEl.appendChild(footerTr);
}

var renderTable = function(){
  // var input = 0;
  for(var i = 0; i < store.length; i++){
    store[i].dataRow();
  }

  console.log(store);
  hourlyTotals();
}
renderTable();








































// // Array of store hours
// var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var hourlyCookies = [];

// // Array of store locations
// function Stores(location, minCust, maxCust, cookiesHourly, avgCookieSale){
//   this.location = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.hourlyCookies = [];
//   this.hourlyCust = [];
//   this.totalSales = 0;
//   this.custPerHour();
//   this.arrayObj();
//   hourlyCookies.push(this.hourlyCookies);
// }

// Stores.prototype.totalCookies = function(){
//   var totalCookiesSold = function(total, num){
//     return total + num;
//   };
//   this.totalSales = this.hourlyCookies.reduce(totalCookiesSold);
// }

// // Randomize function
// Stores.prototype.arrayObj = function(){
//   for(var i = 0; i < openHours.length; i++){
//     var cookiesSoldPerHour = Math.round(this.avgCookieSale * this.hourlyCust[i]);
//     this.hourlyCookies.push(cookiesSoldPerHour);
//   }
// }

// // Calculate customers per hour
// Stores.prototype.custPerHour = function(){
//   for(var i = 0; i < openHours.length; i++){
//     this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// }


// // Get the parent element where you'll be appending all the other elements in
// Stores.prototype.render = function(mainEl){

//   // Creating an article element
//   var article = addElement('article', mainEl);
//   addElement('h3', article);

//   // var cookiesHourly = addElement('ul', article);

//   //  var totalSales = 0;

//   // for(var i = 0; i < openHours.length; i++){
//   //   addElement('li', cookiesHourly, openHours[i])
//   // }

//   // add table
//   var tableElem = addElement('table', article);

//   var headerRowElem = addElement('tr', tableElem, openHours);
//   // this.totalCookies();
//   addElement('th', headerRowElem);

//   var dataRowElem = addElement('tr', tableElem);

//   addElement('td', dataRowElem, this.location);

// }



// // Standalone function
// function addElement(tag, mainEl, text){
//   var element = document.createElement(tag);
//   mainEl.appendChild(element);
//   element.textContent = text;
//   return element;
// }


// var storeContainer = document.getElementById('stores');


// for(var i = 0; i < store.length; i++){
//   var storeOne = store[i];
//   storeOne.render(storeContainer);
// }




// // Creating a h3 element tag Seattle
// // var h3 = document.createElement('h3');
// // h3.textContent = storeOne.location;
// // article.appendChild(h3);


// // Creating a ul element tag 
// // var ul = document.createElement('ul');
// // article.appendChild(ul);
// // var totalSales = 0;
// // for(var i = 0; i < openHours.length; i++){
// //   var total = Math.ceil(cookiesHourly(storeOne.maxCust, storeOne.minCust) * storeOne.avgCookieSale);
// //   totalSales += total;
// //   var li = document.createElement('li');
// //   li.textContent = openHours[i] + ': ' + total + ' cookies';
// //   ul.appendChild(li);
// // }
// // li.textContent = 'Total: ' + totalSales;

// // Creating a h3 element tag Tokyo
// // var secondH3 = document.createElement('h3');
// // secondH3.textContent = storeTwo.location;
// // article.appendChild(secondH3);


// // // Creating a ul element tag 
// // var ul2 = document.createElement('ul');
// // article.appendChild(ul2);
// // var totalSold = 0;
// // for(var j = 0; j < openHours.length; j++){
// //   var totals = Math.ceil(cookiesHourly(storeTwo.maxCust, storeTwo.minCust) * storeOne.avgCookieSale);
// //   totalSold += totals;
// //   var lis = document.createElement('li');
// //   lis.textContent = openHours[j] + ': ' + totals + ' cookies';
// //   ul2.appendChild(lis);
// // }
// // lis.textContent = 'Total: ' + totalSold;


// // Creating a h3 element tag Dubai
// // var thirdH3 = document.createElement('h3');
// // thirdH3.textContent = storeThree.location;
// // article.appendChild(thirdH3);


// // Creating a ul element tag 
// // var ul3 = document.createElement('ul');
// // article.appendChild(ul3);
// // var totalSell = 0;
// // for(var x = 0; x < openHours.length; x++){
// //   var result = Math.ceil(cookiesHourly(storeThree.maxCust, storeThree.minCust) * storeThree.avgCookieSale);
// //   totalSell += result;
// //   var liEl = document.createElement('li');
// //   liEl.textContent = openHours[x] + ': ' + result + ' cookies';
// //   ul3.appendChild(liEl);
// // }
// // liEl.textContent = 'Total: ' + totalSell;


// // Creating a h3 element tag Paris
// // var fourthH3 = document.createElement('h3');
// // fourthH3.textContent = storeFour.location;
// // article.appendChild(fourthH3);


// // // Creating a ul element tag 
// // var ul4 = document.createElement('ul');
// // article.appendChild(ul4);
// // var totalSells = 0;
// // for(var b = 0; b < openHours.length; b++){
// //   var results = Math.ceil(cookiesHourly(storeFour.maxCust, storeFour.minCust) * storeFour.avgCookieSale);
// //   totalSells += result;
// //   var liEls = document.createElement('li');
// //   liEls.textContent = openHours[b] + ': ' + results + ' cookies';
// //   ul4.appendChild(liEls);
// // }
// // liEls.textContent = 'Total: ' + totalSells;


// // Creating a h3 element tag Lima
// // var fifthStore = document.createElement('h3');
// // fifthStore.textContent = storeFive.location;
// // article.appendChild(fifthStore);


// // // Creating a ul element tag 
// // var ul5 = document.createElement('ul');
// // article.appendChild(ul5);
// // var totalSale = 0;
// // for(var c = 0; c < openHours.length; c++){
// //   var final = Math.ceil(cookiesHourly(storeFive.maxCust, storeFive.minCust) * storeFive.avgCookieSale);
// //   totalSale += final;
// //   var liEl5 = document.createElement('li');
// //   liEl5.textContent = openHours[c] + ': ' + final + ' cookies';
// //   ul5.appendChild(liEl5);
// // }
// // liEl5.textContent = 'Total: ' + totalSale;
