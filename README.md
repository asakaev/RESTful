Simple RESTful API
=======

* Node.js v0.10.29
* npm install express (you need to have '/node_modules/express' in your work dir)
* npm install multer (to handle uploads)
* to POST and get response with curl: 'curl -i -X POST http://host:port/setherostats'
* to GET JSON and picture just use our browser
* to POST file with success: 'curl -i -F filedata=@superOk.jpg http://localhost:3000/uploadHeroImage'
* to POST file with error (2Mb): 'curl -i -F filedata=@superBig.jpg http://localhost:3000/uploadHeroImage'