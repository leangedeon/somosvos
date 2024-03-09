"use strict"

const logger      = require('../utils/logger');
const config      = require('../config/config');
const NodeCache   = require('node-cache');
const myCache     = new NodeCache();
const MeliKey     = "mercadopago";
const timeCache   = 20;
const Utils       = require('../utils/utils');
const self        = {};
const hbsUtils    = require('hbs');
const fs          = require('fs');
const nodemailer   = require('nodemailer');


// HOME
self.sitemap = (req, res) => {
	res.type('application/xml');
	res.send('<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"> <url><loc>http://dosmil12.com.ar/clientes</loc></url><url><loc>http://dosmil12.com.ar/nosotros</loc></url><url><loc>http://dosmil12.com.ar/home</loc></url><url><loc>http://dosmil12.com.ar/contacto</loc></url><url><loc>http://dosmil12.com.ar/whatsapp</loc></url><url><loc>http://dosmil12.com.ar/index</loc></url></urlset>');
}

self.home = (req, res) => {
	const section = req.originalUrl.replace("/", "");
	var template = hbsUtils.compile(fs.readFileSync('views/home.hbs', 'utf8'));
	var context = {config: config, device:res.locals.device, section: section};
	var html    = template(context);
	res.send(html);

	// let homeKey = "home_";
	// let timeCache = 0;//7200; // Dos Horas
	// let myHome = myCache.get(homeKey);
	
	// if(typeof myHome == "undefined"){
		// var template = hbsUtils.compile(fs.readFileSync('views/home.hbs', 'utf8'));
		// var context = {config: config, device:res.locals.device, section: section};
		// var html    = template(context);
		// res.send(html);

		// if(myCache.set(homeKey, html, timeCache)){
		// 	console.log("Set Home Success");
		// }else{
		// 	console.log("Set Home Error");
		// }	
		// res.send(html);
	// }else{
	// 	console.log("Get Home Success");
	// 	res.send(myHome);
	// }
};


module.exports = self;