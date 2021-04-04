// import  from '@koa/router';
const Router = require('@koa/router');

const router = new Router({
    prefix: '/home'
});

router.get('/',ctx=>{
    ctx.body = "Hello World";
});

router.post('/',ctx=>{
    ctx.body = "Hello World";
});

// exports [router];
module.exports = router