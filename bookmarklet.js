/*
	This is the bookmarklet javascript
	- Minify when done and make certain that javascript: is still at the beginning
*/
javascript: (function () {
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', '//www.foo.com/script.js');
  	document.body.appendChild(jsCode);
 }());