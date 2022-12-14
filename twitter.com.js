// ==UserScript==
// @name         Remove twitter algo spam
// @namespace    https://twitter.com
// @version      0.1
// @description  Remove all algo trash from twitter. Its not funny or interesting. Configure phrases array if you want to blacklist more keywords, ie. "crypto".
// @author       Pavel
// @match        https://*twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

const $qa = (s, p = document) => [...p.querySelectorAll(s)];

const cleanup = (phrases) => {
  phrases.forEach((phrase) => {
    $qa("main span")
      .filter((el) => el.textContent === phrase)
      .map((el, index) => {
        el.closest("article").remove();
        // console.log(`Removed ${++index}`); // Debug info
      });
  });
};

(() => {
  const phrases = ["Based on your likes", "Funny tweets", "See more"];

  cleanup(phrases);

  setInterval(() => {
    cleanup(phrases);
  }, 500); // Interval is needed because infinity scroll is such a friendly UX pattern
})();
