// ==UserScript==
// @name         Local Dev Deployment
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Add styling to supress sub popup
// @author       Joe
// @match        https://app.trainingpeaks.com/*
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/trainingpeaks.user.js
// @updateURL  https://github.com/joegibson/userscripts/raw/main/trainingpeaks.user.js
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    style.setAttribute('id', 'popup-styling');
    style.textContent = `
      html,body {
        overflow: scroll !important;
      }
      #scroll-dialog-no-title {
          display: none;
      }
    `
    document.head.appendChild(style);
})();
