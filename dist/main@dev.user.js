// ==UserScript==
// @name            qq.video.tool
// @match           https://v.qq.com/x/cover/*
// @version         0.0.2
// @namespace       @xiefeng/qq.video.tool
// @author          xiefeng
// @description     腾讯视频全屏优化
// @icon            https://www.google.com/s2/favicons?sz=64&domain=v.qq.com
// @require         file:///Users/xiefeng/personal-projects/qq-video-tool/dist/main@dev.user.js
// ==/UserScript==


;(() => {
  // webpackBootstrap
  'use strict'
  var __webpack_modules__ = {
    './src/index.ts': () => {
      eval(
        "\nvar _a, _b, _c;\nconst nativeExitFullscreen = (_c = (_b = (_a = Document.prototype.webkitCancelFullScreen) !== null && _a !== void 0 ? _a : Document.prototype.webkitExitFullscreen) !== null && _b !== void 0 ? _b : Document.prototype.mozCancelFullScreen) !== null && _c !== void 0 ? _c : Document.prototype.exitFullscreen;\nDocument.prototype.webkitCancelFullScreen =\n    Document.prototype.webkitExitFullscreen =\n        Document.prototype.mozCancelFullScreen =\n            Document.prototype.exitFullscreen =\n                async function () { };\nwindow.addEventListener('load', () => {\n    var _a;\n    (_a = document\n        .querySelector('.txp_btn_fullscreen')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n        if (document.fullscreenElement) {\n            nativeExitFullscreen.call(document);\n        }\n    });\n});\n\n\n//# sourceURL=webpack://qq-video-tool/./src/index.ts?"
      )
    },
  }

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = {}
  __webpack_modules__['./src/index.ts']()
})()
