const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Sweet World';
});

app.listen(3000);

console.log('Server started...')