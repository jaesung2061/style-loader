/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require("path");
module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	this.cacheable && this.cacheable();
	var comment1 = "// style-loader: Adds some css to the DOM by adding a <style> tag\n";
	var addStyleCode = "require(" + JSON.stringify("!" + path.join(__dirname, "addStyle.js")) + ")\n";
	var comment2 = "\t// The css code:\n";
	var cssCodeRequest = "require(" + JSON.stringify("!!" + remainingRequest) + ")";
	return comment1 + addStyleCode + comment2 + "\t(" + cssCodeRequest + ")";
};
module.exports.seperable = true;