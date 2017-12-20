'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));

  };

  bookView.initBookDetails = function () {
    $('.container').hide();
    $('.book-details').show();
    module.Book.id.map(book => $('.book-details').append(book.detail()));
  };

  bookView.handleDetails = function () {
    $('.book-view-container').on ('click', '.detail-button', function(event){
      event.preventDefault();
      console.log('event handler fired');
      //this.initBookDetails();
    });
  };

  module.bookView = bookView;
})(app);

$(() => app.Book.fetchAll(app.bookView.initIndexPage));
//$(() => app.bookView.handleDetails);
//$(app.bookView.handleDetails());