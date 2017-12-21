
'use strict'

page('/index', ctx => initIndexPage(ctx));
page('/about', ctx => initIndexPage(ctx));
page('/index/:id', ctx => initDetailPage(ctx));


page();