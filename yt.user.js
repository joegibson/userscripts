// ==UserScript==
// @name         YT remove playlist function
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add styling to compress menu bar and margin or padding above video.
// @author       Joe
// @match        https://www.youtube.com/playlist?list=WL
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/yt.user.js
// ==/UserScript==

(function() {
  'use strict';
  let wlContainer = document.querySelector('#contents.ytd-playlist-video-list-renderer.ytd-playlist-video-list-renderer')
  let hrefPathToReplace = 'list=WL&index='
  let wlLinks = wlContainer.querySelectorAll("a#thumbnail,a#video-title")
  wlLinks.forEach(function(l){
    let currentHref = l.getAttribute("href");
    let newHref = currentHref.replace('list=WL&index=','nothing=')
    l.setAttribute("href", newHref);
  })
})();
