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
  bookView.handleDetails = () => {
    $(`.detail-button`).on ('submit', function(event){
      event.preventDefault();
      this.initBookDetails();
    });
  };

  module.bookView = bookView;
})(app);

$(() => app.Book.fetchAll(app.bookView.initIndexPage));