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
  Book.prototype.toHtml = function(templateId) {
    return Handlebars.compile($(templateId).text())(this);
  };

  // Book.prototype.detail = function() {
  //   return Handlebars.compile($('#book-details-template').text())(this);
  // };  
  //this will call the loadall function, taking the data from the server and pushing it into the new Book constructor

  Book.fetchAll = callback => {
    $.get('/books_app')
      .then(results => {
        Book.loadAll(results);
        callback();
      });
  };

  Book.all = [];
  Book.loadAll = rows => Book.all = rows.sort((a,b) => a.title - b.title).map(book => new Book(book));



  Book.fetchOne = (id, callback) => {
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };//return value is just an array of objects so can be reused, give it different arguments when call, and get what you want

  //this one is maybe not neccessary tho...:
  //Book.loadOne = row => row.map(book => new Book(book));

  // //we need this one because of uri, I changed it to a variable for now
  // Book.fetchOne = callback => {
  //   $.get(`${__API_URL__}/api/v1/books/${this.book_id}`)
  //     .then (Book.loadAll).filter((ele, idx)=> ele ) //filter out only info we need, ie for a specific book
  //     .then (callback)
  //     .then(errorCallback);
  // };

  module.Book = Book;

})(app);
