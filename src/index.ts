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
    .querySelector<HTMLDivElement>('.txp_btn_fullscreen')
    ?.addEventListener('click', () => {
      if (document.fullscreenElement) {
        nativeExitFullscreen.call(document)
      }
    })
})
