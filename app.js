var express = require('express');
var app = express();

//app.configure(function () {
//    app.use(express.methodOverride());
//    app.use(express.bodyParser({keepExtensions: true, uploadDir: path.join(__dirname, '/files'}));
//});

// set default superhero info
var superhero = {};
superhero.name = 'Looser';
superhero.strength = 10;
superhero.dexterity = 20;
superhero.intellect = 0;
superhero.isInvincible = false;

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/getHeroStats', function (req, res) {
    res.setHeader("API Info", "This is info about superhero."); // set custom header (REST?)
    res.json(superhero); // return superhero object as JSON string
});

app.get('/getHeroImage', function (req, res) {
    res.sendfile('superhero.png');
});

app.post('/setHeroStats', function (req, res) {
    superhero.name = 'changed';
    res.end('Done set params!');
});

// TODO: if no file then 'req.files' is undefined
app.post('/uploadHeroImage', function (req, res) {
    console.log(req.body);
    console.log(req.files);
    res.end('Uploaded!');
});


var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});