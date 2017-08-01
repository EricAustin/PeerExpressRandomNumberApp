var express = require('express');
var app = express();
var port = 5000;

console.log('express sourced')

app.use(express.static('public'));

app.get('/random', function(req, res) {
    res.send(Math.random().toString());
});

app.listen(port, function(){
    console.log('listening on port', port);
})