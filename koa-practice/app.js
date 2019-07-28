const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json') 

const app = new Koa()
const router = new KoaRouter()

// Json prettier Middleware
app.use(json()) // using the package

app.use(async ctx => ctx.body = {msg: 'Hello Dori'}) // like you would do for an API 








// Router Middleware

app.listen(3000, () => console.log('Server started...'))
