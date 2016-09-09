const item = require('./entity/item');
var router = require('koa-router')();

// router.get('/components/:id', async function (ctx, next) {
//   await item(ctx);
//   await ctx.render('index');
//   next();
// })

router.get('/:id', item)

module.exports = router;
