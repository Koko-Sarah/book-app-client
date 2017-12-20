'use strict'

var app = app || {};
//here we need set __API_URL__
var __API_URL__='http:localhost:3000' //when deployed this will be set to our database URL


(function (module) {
  var __API_URL__ = 'http:localhost:3000' //when deployed this will be set to our database URL, so to the top level: sb-kk-app.heroku.com 
  //err call back funciton, you may not always have this right away, but having this is good practice

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPAge(err);

  }

  //this  is the book constructor take key data from table rows create an instance of the book object fomr data base records, this will incorporate the book_id as a property of each book instance

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }
 

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());
    return template (this)//the context of 'this' is the book instance
    //can also do this is one line

  };

  Book.all = [];
  //now we define some methods for the book obj

  Book.loadAll = rows => Book.all = rows.sort((a,b) => a.title-b.title).map(book => new Book(book));
  
  //get data from server and push to constructor
  Book.loadAll = rawData => {
    Book.all = rawData.map(row=> new Book(row));
  };
  //this will call the loadall function, taking the data from the server and pushing it into the new Book constructor

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(errorCallback);
  };




  module.Book = Book;//setting the book onto the module parameter from the beginning, making this available outside of our iife
})(app);