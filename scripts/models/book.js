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





})(app);