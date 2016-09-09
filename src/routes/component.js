const item = require('./entity/item');

// router.get('/components/:id', async function (ctx, next) {
//   await item(ctx);
//   await ctx.render('index');
//   next();
// })

router.get('/components/:id', item)

module.exports = router;
