'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();

    module.Book.all.map(book => $('#book-list').append(book.toHtml('.book-view')));

    // $('.book-container').on('click', '.detail-button', function (event) {
    //   event.preventDefault();
    //   console.log('event handler fired');
    //   //this.initBookDetails();
    // });

  };

  bookView.initBookDetails = function () {
    $('.container').hide();
    $('.book-detail-section').show();
    $('#detail-desc').empty();//this is just a placeholder for an idea for a bug that scott had, basically trying to clear the feild each time we create this view
    module.Book.all.map(book => $('.book-details').append(book.toHtml('.book-detail-section')));
   
  };

  // bookView.handleDetails = function () {
  //   // $('.book-view-container').on ('click', '.detail-button', function(event){
  //   //   event.preventDefault();
  //   //   console.log('event handler fired');
  //   //   //this.initBookDetails();
  //   // });
  // };

  module.bookView = bookView;
})(app);

$(() => app.Book.fetchAll(app.bookView.initIndexPage));
//$(() => app.bookView.handleDetails);
//$(app.bookView.handleDetails());