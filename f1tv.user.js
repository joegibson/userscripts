// ==UserScript==
// @name         Local Dev Deployment
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add styling to compress menu bar and margin or padding above video.
// @author       Joe
// @match        https://f1tv.formula1.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=busites.com
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/f1tv.user.js
// ==/UserScript==

(function() {
    'use strict';
    const urlParams = new URLSearchParams(window.location.search);
    const play = urlParams.get('action');
    if(play === "play"){
        var style = document.createElement('style');
        style.setAttribute('id', 'popup-styling');
        style.textContent = `
          .header .navbar {
              height: 30px;
          }
          .global-header {
              height: 30px;
          }
          .global-header-f1tvicon{
              padding: 5px 17px;
              height: 30px;
          }
          .sticky-header-wrapper {
              margin-bottom: 40px !important;
          }
          .global-header-actions {
              padding-top: 0px;
          }
        `
    document.head.appendChild(style);
    }
})();
