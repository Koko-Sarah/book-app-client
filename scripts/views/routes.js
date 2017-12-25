
'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initBookDetails));

page('/form', app.bookView.initNewBookPage);

page('/books/:book_id/update' , (ctx, next) => app.Book.fetchOne(ctx, next), ctx => app.bookView.initUpdateBook(ctx)
);

page();
