const Koa = require('koa')
const app = new Koa()

// loger 

app.use(async (ctx, next) => {
	await next()
	const rt = ctx.response.get('X-Response-Time') // getter
	console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time

app.use(async (ctx, next) => {
	const start = Date.now()
	await next()
	const ms = Date.now() - start
	ctx.set('X-Response-Time', `${ms}ms`) // setter
})

// response 

app.use(async ctx => {
	ctx.body = "Hello nerd"
})

app.listen(3001)

// When connecting to the server logs
// GET / - 7ms
// GET /favicon.ico - 0ms