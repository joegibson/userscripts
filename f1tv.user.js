// ==UserScript==
// @name         Local Dev Deployment
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Add styling to compress menu bar and margin or padding above video.
// @author       Joe
// @match        https://f1tv.formula1.com/*
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/f1tv.user.js
// ==/UserScript==

(function() {
    'use strict';
    //const urlParams = new URLSearchParams(window.location.search);
    //const play = urlParams.get('action');
    //console.log("play :",play);
    var style = document.createElement('style');
    style.setAttribute('id', 'popup-styling');
    style.textContent = `
      .header .navbar {
          height: 30px;
      }
      .global-header {
          height: 40px;
      }
      .global-header-f1tvicon{
          padding: 5px 17px;
          height: 30px;
      }
      .global-header-actions {
          padding-top: 0px;
      }
    `
    document.head.appendChild(style);
})();
