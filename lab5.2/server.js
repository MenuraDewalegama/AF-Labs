const koa = require('koa');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.routes');
const bodyParser = require('koa-bodyparser');
require('./dal');

const app = new koa();



app.use(bodyParser());

app.use(HomeRouter.routes()).use(HomeRouter.allowedMethods());
app.use(PostRouter.routes()).use(PostRouter.allowedMethods());

app.use(ctx => {
    ctx.body = "Hello";
});

app.listen(3000);

console.log("Application is running on port : 3000");



// app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());