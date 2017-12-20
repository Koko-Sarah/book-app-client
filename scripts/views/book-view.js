'use strict'

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function (err) {
    $('.container').hide();//hide all other sections
    $('.book-view').show();//show book section
    module.Book.all.map(book => $$('#book-list').append(book.toHtml()))
  };
  module.bookView = bookView;
})(app);


$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage)
});