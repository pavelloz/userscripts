// ==UserScript==
// @name         Instagram algo trash
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes suggested posts from instagram
// @author       Pavel
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

const $qa = (s, p = document) => [...p.querySelectorAll(s)];

const cleanup = (phrases) => {
  phrases.forEach((phrase) => {
    $qa("main section")
      .filter((el) => el.textContent === phrase)
      .map((el) => {
        el.closest("article").remove();
      });
  });
};

(() => {
  const phrases = ["Suggested post"];

  cleanup(phrases);

  setInterval(() => {
    cleanup(phrases);
  }, 500); // Interval is needed because infinity scroll is such a friendly UX pattern
})();
