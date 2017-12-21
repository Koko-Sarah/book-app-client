
'use strict';

page('/', app.Book.fetchAll(app.bookView.initIndexPage));
//page('/about', ctx => app.Book.fetchAll(app.bookView.initIndexPage(ctx)));

page('/books/:id', ctx=> {
    
  ( app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage));
  console.log('ctx is wuh', ctx);

});

//page();


// app.bookView.initBookDetails();


//previously on book-view page
// $((ctx=> app.Book.fetchAll(app.bookView.initIndexPage(ctx));

//ctx => app.Book.fetchOne(app.bookView.initDetailPage(ctx))

//page('/user/:id', load, show)