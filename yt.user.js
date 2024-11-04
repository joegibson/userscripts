// ==UserScript==
// @name         YT remove playlist functionality
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Removing playlist function so a video doesn't auto play the next one
// @author       Joe
// @match        https://www.youtube.com/*
// @grant        none
// @downloadURL  https://github.com/joegibson/userscripts/raw/main/yt.user.js
// @updateURL    https://github.com/joegibson/userscripts/raw/main/yt.user.js
// ==/UserScript==

if(ytPageType === 'playlist'){
  console.log("Playlist page")
  let wlContainer = document.querySelector('#contents.ytd-playlist-video-list-renderer.ytd-playlist-video-list-renderer')
  let hrefPathToReplace = 'list=WL&index='
  let wlLinks = wlContainer.querySelectorAll("a#thumbnail,a#video-title")
  
  wlLinks.forEach(function(l){
    let currentHref = l.getAttribute("href");
    let newHref = currentHref.replace('list=WL&index=','nothing=')
    l.setAttribute("href", newHref);
  })
}
