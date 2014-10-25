var exec = require('cordova/exec');
var channel = require('cordova/channel');

function Aylien(){
	var me = this;
}

Aylien.prototype.summarize = function(arg, successCallback){
    exec(successCallback,null, "Aylien", "summarize", [encodeURIComponent(arg)]);
}

Aylien.prototype.hashtags = function(arg, successCallback){
    exec(successCallback,null, "Aylien", "hashtags", [encodeURIComponent(arg)]);
}

Aylien.prototype.sentiment = function(arg, successCallback){
		exec(successCallback,null, "Aylien", "sentiment", [encodeURIComponent(arg)]);
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = new Aylien();
}
