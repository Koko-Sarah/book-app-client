<<<<<<< HEAD
'use strict';

var app = app || {};
(function (module) {
  var __API_URL__ = 'https://sb-kk-booklist.herokuapp.com/';
  function errorCallback(err){
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function Book(rawBookObj) {
    Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key]);
  }
  Book.prototype.toHtml = function() {
    return Handlebars.compile($('#book-list-template').text())(this);
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a,b) => a.title - b.title).map(book => new Book(book));
  Book.fetchAll = callback =>{
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };
  module.Book = Book;
=======
'use strict'

var app = app || {};


(function (module) {
//this is the book constructor take key data from table rows create an instance of the book object 

  function Book(bookDataObj) {
    Object.keys(bookDataObj).forEach(key => this[key] = bookDataObj[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-template').text());
    //not complete
  };

  //get data from server and push to constructor
  Book.loadAll = rawData => {
    Book.all = rawData.map(row=> new Book(row));
  };

//this will call the loadall function, taking the data from the server and pushing it into the new Book constructor

  Book.fetchAll = callback => {
    $.get('/books_app')
      .then(results => {
        Book.loadAll(results);
        callback();
      });
  };





>>>>>>> f933f35a9591f371a93c9eeb418f6b9ea639db0b
})(app);