"use strict";

let self 	  = {};
var base_url  = process.env.APP_BASE_URL || 'http://localhost:5005';

self.config = {
	metas: {
		title : "dosmil12.com.ar",
		color : "#000000",
		url_site: base_url+"/",
		og_image: base_url+"/statics/images/dosmil12comar.jpg",
		canonical : "http://www.dosmil12.com.ar/"
	},
	sitePathCom : base_url,
	sitePathComAr : base_url,
	sitePath : base_url,
	sourcePath : base_url+"/statics",
	phoneChat: "https://wa.me/5491158888423",
	portfolio: "https://www.behance.net/leandrogedeon",
};

module.exports = self;


