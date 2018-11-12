(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import {saludo, despedida} from "./modules/example"
// import {activeMenu} from './modules/active-menu'

// saludo()
// despedida()
// activeMenu()

$('input[type=range]').on('input', function (e) {
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

(function (d, c) {
  if (d.querySelectorAll('.search-page-list')) {
    var list = [].concat(_toConsumableArray(d.querySelectorAll('.search-page-list')));
    list.map(function (ul) {
      var li = [].concat(_toConsumableArray(ul.querySelectorAll('.li-child')));
      if (li.length < 6) {
        li[li.length - 1].style.borderBottom = "1px solid";
      }
    });
  }
  if (document.querySelector('.artists-page')) {
    var colors = ['#00AFF2', '#282C93', '#DE182A', '#FF5A20', '#FFB131', '#FEEE00', '#6DC72B', '#00953B', '#00ACE4', '#752995'];
    var artistsContainer = document.querySelector('.artists-page');
    var artistImages = [].concat(_toConsumableArray(artistsContainer.querySelectorAll('img')));
    var colorindex = 0;
    artistImages.forEach(function (img, i) {
      if (i > 4) {
        img.style.background = colors[colorindex];
        colorindex++;
      }
    });
  }
})(document, console.log);

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
