'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initBookDetails));
//when call page we are impllictly handed a context object, so can access the params.id of that object and pass it in as a parameter