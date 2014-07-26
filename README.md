Simple RESTful API
=======

* Node.js v0.10.29
* npm install express (you need to have '/node_modules/express' in your work dir with app.js)
* npm install multer (to handle uploads, same node_modules stuff as before)
* npm install body-parser (to get params from POST request)
* to GET superhero stats with curl: 'curl -i http://localhost:3000/getherostats' ('i' is for header info)
* to GET superhero picture just use your browser: http://localhost:3000/getHeroImage
* to POST file with success: 'curl -i -F filedata=@superOk.jpg http://localhost:3000/uploadHeroImage'
* to POST file with error (2Mb): 'curl -i -F filedata=@superBig.jpg http://localhost:3000/uploadHeroImage'
* to POST params: 'curl -H "Content-Type: application/json" -d '{"name":"xyz","strength":20,"dexterity":40,"intellect":11,"isInvincible":true}' http://localhost:3000/setHeroStats'