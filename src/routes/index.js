var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'Koa2 Rocks'
  };
  // console.log('STATE', ctx.state);

  await ctx.render('index', {
  });
})
module.exports = router;
