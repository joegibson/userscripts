// ==UserScript==
// @name         Local Dev Deployment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add styling to compress menu bar and margin or padding above video.
// @author       Joe
// @match        https://f1tv.formula1.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=busites.com
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/f1tv.user.js
// ==/UserScript==

(function() {
    'use strict';
        var style = document.createElement('style');
        style.setAttribute('id', 'popup-styling');
        style.textContent = `
          .header .navbar {
              height: 30px;
          }
          .sticky-header-wrapper {
              margin-bottom: 60px !important;
          }
        `
    document.head.appendChild(style);
})();
