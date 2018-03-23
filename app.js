const EXPRESS = require('express');
const APP = EXPRESS();


APP.use('/assets', EXPRESS.static('assets'));
APP.use('/bower_components', EXPRESS.static('bower_components'));

APP.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

APP.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

APP.get('/registro', function (req, res) {
    res.sendFile(__dirname + '/register.html');
});

APP.get('/routes', function (req, res) {
    res.sendFile(__dirname + '/assets/routes/404.html');
});

APP.get('*',function (req, res) {
    res.sendFile(__dirname + '/404.html');
});

APP.listen(3000, ()=>
    console.log('servidor levantado en 3000')
);
