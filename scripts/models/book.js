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

})(app);