const Koa = require('koa')
const app = new Koa()

app.use(async ctx => ctx.body = {msg: 'Hello Dori'}) // like you would do for an API 
app.listen(3000, () => console.log('Server started...'))
