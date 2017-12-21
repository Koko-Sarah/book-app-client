'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));

  };

  bookView.initNewBookPage = () => {
    $('#new-form').show();
    $('.container').hide();
    $('#new-form').on('change', 'input, textarea', bookView.create);
    $('#new-form').on('submit', bookView.submit);
  };
  bookView.create = () => {
    let book;
    $('#new-book').empty();

    book = new Book ({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });

    $('#new-book').append(book.toHtml());

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    $('#export-field').show();
  };
  bookView.submit = event => {
    event.preventDefault();
    let book = new Book ({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });
    book.insertRecord();
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