// 'use strict';

// Array of store hours
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


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
  // hourlyCookies.push(this.hourlyCookies);
}

// Calculating the total cookies sold for open hours for each store
Stores.prototype.totalCookies = function(){
  var totalCookiesSold = function(total, num){
    return total + num;
  }
  this.totalSales = this.hourlyCookies.reduce(totalCookiesSold);
}

// calculating the total hourly customers
Stores.prototype.calculateCustPerHour = function(){
  for(var i = 0; i < openHours.length; i++){
    this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
}

// calculating the hourly cookies sold
Stores.prototype.arrayObj = function(){
  for(var i = 0; i < openHours.length; i++){
    var cookiesPerHour = Math.round(this.avgCookies * this.hourlyCust[i]);
    this.hourlyCookies.push(cookiesPerHour);
  }
}

// Main container
var tableEl = document.getElementById('stores');

var article = document.createElement('article');
tableEl.appendChild(article);

// Creating data for the store rows
Stores.prototype.dataRow = function(){
  this.totalCookies();
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);

  // adding data to the table
  var tdEl = document.createElement('td');
  for(var i = 0; i < this.hourlyCookies.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookies[i];
    trEl.appendChild(tdEl);
    article.appendChild(trEl);
  }

  // creating data for total cookies sold by each store
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  article.appendChild(trEl);
}

// creating new stores instances
var store = [];
store.push(new Stores('Seattle', 23, 65, 6.3));
store.push(new Stores('Tokyo', 3, 24, 1.2));
store.push(new Stores('Dubai', 11, 38, 3.7));
store.push(new Stores('Paris', 20, 38, 2.3));
store.push(new Stores('Lima', 2, 16, 4.6));

// table headerRow
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
  article.appendChild(trEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  article.appendChild(trEl);
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
  footerTotal.textContent = grandTotal;
  footerTr.appendChild(footerTotal);
  article.appendChild(footerTr);
}


var renderTable = function(){
  for(var i = 0; i < store.length; i++){
    store[i].dataRow();
  }

  console.log(store);
}
renderTable();

// Creating Store form
var storeForm = document.getElementById('storeForm');
storeForm.addEventListener('submit', addNewStore);

function addNewStore(event){

  event.preventDefault(); //prevents page from reloading when someone clicks submit
  console.log('button clicked');

  //targeting the input names on the form
  var storeName = event.target.newStore.value;
  var minCust = parseInt(event.target.minCust.value); // parseInt parses a string value and returns an integer
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);//parseFloat parses its argument and returns a floating point number

  // Constructor for adding new store
  var newCity = new Stores(storeName, minCust, maxCust, avgCookies);
  event.target.reset();
  newCity.dataRow();
  store.push(newCity);
  hourlyTotals();
}
