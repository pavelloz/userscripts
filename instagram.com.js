// ==UserScript==
// @name         Instagram algo trash
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes algo trash from instagram. Suggested posts, because you watched something etc.
// @author       Pavel
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==
const $qa = (s, p = document) => [...p.querySelectorAll(s)];

const cleanup = (phrases) => {
  phrases.forEach((phrase) => {
    $qa("main span")
      .filter((el) => el.textContent.includes(phrase))
      .map((el) => {
        el.closest("article")?.remove();
      });
  });
};

(() => {
  const phrases = ["Suggested post", "Because you watched"];

  cleanup(phrases);

  setInterval(() => {
    cleanup(phrases);
  }, 500); // Interval is needed because infinity scroll is such a friendly UX pattern
})();
