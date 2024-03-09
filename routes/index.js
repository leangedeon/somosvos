"use strict"

const express  = require('express');
const router   = express.Router();
const uaparser = require('ua-parser-js');
const main     = require('../controllers/MainController');


router.all('*', function (req, res, next) {

    let app = req.app,
        ua  = new uaparser(req.get('User-Agent'));

    if(ua.getDevice().type === "mobile" || ua.getDevice().type === "wearable" || ua.getDevice().type === "embedded"){
    	res.locals.device = "mobile";	
    }else{
    	res.locals.device = "desktop";
    }
    console.log("Device => ", res.locals.device);
    next();
});

//FRONT  ========================================================================================
router.get('/', (req, res, next) => main.home(req, res, next));
router.get('/contacto', (req, res, next) => main.home(req, res, next));
router.get('/index', (req, res, next) => main.home(req, res, next));
router.get('/home', (req, res, next) => main.home(req, res, next));
router.get('/nosotros', (req, res, next) => main.home(req, res, next));
router.get('/whatsapp', (req, res, next) => main.home(req, res, next));
router.get('/clientes', (req, res, next) => main.home(req, res, next));
router.get('/sitemap.xml', (req, res, next) => main.sitemap(req, res, next));


module.exports = router;
