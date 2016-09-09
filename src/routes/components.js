var router = require('koa-router')();

const item = require('./entity/item');
const create = require('./entity/create');
const version = require('./entity/version');
const list = require('./entity/list');


// router.get('/components/:id', async function (ctx, next) {
//   await item(ctx);
//   await ctx.render('index');
//   next();
// })

router.get('/:id', item)
// router.get('/:id', version)
router.get('/', list)
router.post('/:id', create)

module.exports = router;
