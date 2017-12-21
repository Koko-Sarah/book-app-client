'use strict';

var app = app || {};
(function (module) {
  //var __API_URL__ = 'https://sb-kk-booklist.herokuapp.com';
  var __API_URL__ = 'http://localhost:3000';

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

  Book.prototype.detailHtml = function() {
    return Handlebars.compile($('#book-details-template').text())(this);
  };

  //this will call the loadall function, taking the data from the server and pushing it into the new Book constructor

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books_app`)
      .then(results => {
        Book.loadAll(results);
        callback();
      });
  };
  Book.fetchOne = (id, callback) => {
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
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

})(app);
