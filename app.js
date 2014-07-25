var express = require('express');
var app = express();

// set default superhero info
var superhero = {};
superhero.name = 'Looser';
superhero.strength = 10;
superhero.dexterity = 20;
superhero.intellect = 0;
superhero.isInvincible = false;

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/getHeroStats', function(req, res){
  res.setHeader("API Info", "This is info about superhero."); // set custom header (REST?)
  res.json(superhero); // return superhero object as JSON string
});

app.get('/getHeroImage', function (req, res) {
    res.sendfile('superhero.png');
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});