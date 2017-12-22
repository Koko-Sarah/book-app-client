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
    $('.details-desc').on('click', 'button', function (e) {
      console.log($(this).data('bookid'));
      module.Book.removeOne($(this).data('bookid'))
    }
    module.Book.all.map(book => $('#details-section').append(book.detailHtml()));
  };

//returns the id of the book from the data-bookid attrib

  ///////////////////////////////////Form functions

  bookView.initNewBookPage = () => {
    $('.container').hide();
    $('.new-book').show();
    // $('#new-book').on('change', 'input, textarea', bookView.create);
    $('#new-book').on('submit', bookView.submit);
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

    bookView.delete = event => {
      console.log('we hit delete event whats this: ', this);
      event.preventDefault();

    };




    book.insertBook();
  };






  module.bookView = bookView;
})(app);






