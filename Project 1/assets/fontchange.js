$(document).ready(function(){

var fontType = [ "Lily Script One", "Monoton"];
var num= [Math.floor(Math.random()*2)];

document.getElementByClass('header').setAttribute( "onClick", "font-family", fontType[Math.floor(Math.random()*2)]);

});