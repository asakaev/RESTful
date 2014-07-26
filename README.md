Simple RESTful API
=======

* Node.js v0.10.29
* npm install express (you need to have '/node_modules/express' in your work dir with app.js)
* npm install multer (to handle uploads, same node_modules stuff as before)
* to GET superhero stats with curl: 'curl -i http://localhost:3000/getherostats' ('i' is for header info)
* to GET superhero picture just use your browser: http://localhost:3000/getHeroImage
* to POST and get response with curl: 'curl -i -X POST http://localhost:3000/setherostats'
* to POST file with success: 'curl -i -F filedata=@superOk.jpg http://localhost:3000/uploadHeroImage'
* to POST file with error (2Mb): 'curl -i -F filedata=@superBig.jpg http://localhost:3000/uploadHeroImage'