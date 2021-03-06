const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json') 
const path = require('path')
const render = require('koa-ejs')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new KoaRouter()

// Replace with DB
const things = ['topping up Oyster', 'paying cash', 'walking dog']

// Json prettier Middleware
app.use(json()) // using the package

// Body parser
app.use(bodyParser())

// Add additional properties to context (any)
app.context.user = 'Dori'

// Simple middleware example
// app.use(async ctx => ctx.body = {msg: 'Hello Dori'}) // like you would do for an API 

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExtension: 'html',
    cache: false,
    debug: false
})

// Routes

router.get('/', index)
router.get('/add', showAdd)
router.post('/add', add)

// List of things
async function index(ctx) {
    await ctx.render('index', {
        title: 'Things I do not love',
        things // making use of ES7 feature 
    })
}

// Show add page
async function showAdd(ctx) {
    await ctx.render('add')
}

// Add item
async function add(ctx) {
    const body = ctx.request.body
    things.push(body.thing) 
    ctx.redirect('/')
}

// Index
// router.get('/', async ctx => {
//     await ctx.render('index', {
//         title: 'Things I do not love',
//         things // making use of ES7 feature 
//     })
// })

router.get('/test', ctx => ctx.body = `Hello ${ctx.user}`)
router.get('/test2/:name', ctx => ctx.body = `Hello ${ctx.params.name}`) // getting parameters


// Router Middleware
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => console.log('Server started...'))
