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
    $('#details-section').empty();
    // console.log(module.Book.all)
    module.Book.all.map(book => $('#details-section').append(book.detailHtml()));
  };




  ///////////////////////////////////Form functions
  bookView.initNewBookPage = () => {
    $('#new-form').show();
    $('.container').hide();
    $('#new-form').on('change', 'input, textarea', bookView.create);
    $('#new-form').on('submit', bookView.submit);
  };
  bookView.create = () => {
    let book;
    $('#new-book').empty();

    book = new Book({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });

    $('#new-book').append(book.toHtml());

    $('pre code').each(function (i, block) {
      hljs.highlightBlock(block);
    });
    $('#export-field').show();
  };
  bookView.submit = event => {
    
    event.preventDefault();
    let book = new Book({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });

    book.insertBook();
  };






  module.bookView = bookView;
})(app);






