// ==UserScript==
// @name            qq.video.tool
// @match           https://v.qq.com/x/cover/*
// @version         0.0.2
// @namespace       @xiefeng/qq.video.tool
// @author          xiefeng
// @description     腾讯视频全屏优化
// @icon            https://www.google.com/s2/favicons?sz=64&domain=v.qq.com
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
