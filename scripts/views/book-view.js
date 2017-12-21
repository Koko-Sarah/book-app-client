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
    $('#detail-desc').empty();
    // console.log(module.Book.all)
    module.Book.all.map(book => $('#detail-desc').append(book.detailHtml()));
  };

  module.bookView = bookView;
})(app);

$(() => app.Book.fetchAll(app.bookView.initIndexPage));
