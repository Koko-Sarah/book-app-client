'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));

  };

  bookView.initBookDetails = function (ctx, next) {
    $('.container').hide();
    $('.book-details').show();
    $('#details-section').empty();
    console.log('book.all', module.Book.all[0].book_id);
    console.log('ctx', ctx.book);
    console.log('this', this);
    //we are thinking need to delay the execute of deleteOne
    //$('#delete-book').on('click', 'button', app.Book.deleteOne);
    //$('#delete-book').on('click', 'button', app.Book.deleteOne(module.Book.all[0].book_id))
    module.Book.all.map(book => $('#details-section').append(book.detailHtml()));
    $('#delete-book').on('click', function () {
      module.Book.deleteOne(module.Book.all[0].book_id);
    });
    next();
  };



  ///////////////////////////////////Form functions

  bookView.initNewBookPage = () => {
    $('.container').hide();
    $('.new-book').show();
    $('#new-book').on('submit', 'input, textarea', bookView.create);
    $('#new-book').on('click', 'button', bookView.submit);
  };

  bookView.create = () => {
    let newBook;
    $('#new-book').empty();

    newBook = new app.Book ({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val()
    });
  };


  bookView.submit = event => {
    console.log ('we hit submit event');
    event.preventDefault();
    let book = new app.Book ({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val(),
    });

    book.insertBook( () => page('/'));
  };

  bookView.delete = event => {
    console.log('we hit delete event');
    event.preventDefault();
    app.Book.deleteOne(module.Book.all[0].book_id);
  };





  module.bookView = bookView;
})(app);






