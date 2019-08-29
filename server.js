'user-strict'
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var db = require('./db');
const cors = require('cors');
const user = require('./modules/user/routes');
    app.use(cors());
    // app.use(fileUpload());
    
    app.use(express.static(__dirname + '/uploads'));
    // app.options('*', cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/user',user);
    app.use(function onError(err, req, res, next) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support.
        res.statusCode = 500;
        console.log('error')
        res.end('\n');
      });
    
    app.get('/',(req,res)=>{
        
        res.send('hye')
    })
    
    app.listen(3000, function () {
        console.log('server listen started', 3000);
    });