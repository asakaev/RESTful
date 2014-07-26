var express = require('express');
var app = express();
app.disable('x-powered-by'); // remove mess from header

// multer add upload support to express 4 (express 3 use connect instead)
var multer = require('multer'); // to handle uploads
app.use(multer({dest: './uploads/'}));

var fs = require('fs'); // filesystem stuff (to move temp uploaded file)

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
    res.sendfile('superhero.jpg');
});

app.post('/setHeroStats', function (req, res) {
    superhero.name = 'changed';
    res.end('Done set params!');
});

app.post('/uploadHeroImage', function (req, res) {
    res.setHeader("API Info", "This is info about file upload.");
    console.log(req.files);

    // check if something uploaded and extension is JPG and size smaller than 1Mb
    if (req.files && req.files.filedata.extension == 'jpg'
        && req.files.filedata.size <= 1000000) {
        console.log('JPG file received and it\' size smaller than 1Mb.');
        var tmpPath = req.files.filedata.path;
        var newPath = 'superhero.jpg';

        fs.rename(tmpPath, newPath, function (err) {
            if (err) {
                res.json(err)
            } else {
                console.log('Uploaded file moved from temp dir to right place.');
                res.json({uploadStatus: 'success'});
            }
        });
    } else {
        console.log('Some condition doesn\'t match. Maybe extension or filesize.');

        // delete temp uploaded file
        if (req.files) {
            var tmpPath = req.files.filedata.path;
            fs.unlink(tmpPath, function (err) {
                if (err) throw err;
            });
        }
        res.json({uploadStatus: 'error'});
    }
});


var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});