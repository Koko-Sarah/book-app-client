'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initBookDetails));
//when call page we are impllictly handed a context object, so can access the params.id of that object and pass it in as a parameter

//ctx object is implicitly returned? when call next, ctx object follows through chain
//  

page(
  'URI/path',
  (ctx, next) => app.bookView.pokeSeatch(ctx, next),
  ctx =>{}
);
//ctx will be how we get the name of the poke we want, 
// in book view wil need to get a path t the poke with a ${variable}, with ${variable}=${ctx.params.name}
// thiw will return a pokemon and we wnat to attach it to ctx.pokemon SO:
// .then(pokemon=>ctx.pokemon = pokemon) we return the value which is implicitly handed to the next function
// .then(next)
// .catch(console.error)
