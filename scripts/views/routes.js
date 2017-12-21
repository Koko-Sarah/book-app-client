
'use strict';

page('/index', ctx => initIndexPage(ctx));
page('/about', ctx => initIndexPage(ctx));
page('/index/:id', ctx => initDetailPage(ctx));


page();
// app.bookView.initBookDetails();

// $(() => app.Book.fetchAll(app.bookView.initIndexPage));