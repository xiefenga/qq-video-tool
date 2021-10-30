// ==UserScript==
// @name          qq.video.tool
// @match         https://v.qq.com/x/cover/*
// @version       0.0.1
// @namespace     @xiefeng/qq.video.tool
// @author        xiefeng
// ==/UserScript==


;(() => {
  // webpackBootstrap
  'use strict'
  var __webpack_exports__ = {}

  const nativeExitFullscreen =
    Document.prototype.webkitCancelFullScreen ??
    Document.prototype.webkitExitFullscreen ??
    Document.prototype.mozCancelFullScreen ??
    Document.prototype.exitFullscreen
  Document.prototype.webkitCancelFullScreen =
    Document.prototype.webkitExitFullscreen =
    Document.prototype.mozCancelFullScreen =
    Document.prototype.exitFullscreen =
      async function () {}
  window.addEventListener('load', () => {
    document
      .querySelector('.txp_btn_fullscreen')
      ?.addEventListener('click', () => {
        if (document.fullscreenElement) {
          nativeExitFullscreen.call(document)
        }
      })
  })
})()
