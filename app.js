var staticCache = require('koa-static-cache');
var koa = require('koa.io');
var path = require('path');
var fs = require('fs');
var app = koa();


app.use(staticCache(path.join(__dirname, 'public')));

app.use(function*() {
    this.body = fs.createReadStream(path.join(__dirname, 'public/index.html'));
    this.type = 'html';
});

console.log("listening on :4001");
app.listen(4001);

