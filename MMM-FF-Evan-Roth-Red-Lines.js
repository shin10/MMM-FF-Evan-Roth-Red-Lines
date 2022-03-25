/* Magic Mirror
 * Module: MMM-FF-Evan-Roth-Red-Lines
 *
 * By Michael Trenkler
 * ISC Licensed.
 */

Module.register("MMM-FF-Evan-Roth-Red-Lines", {
  defaults: {
    grayscale: false,
    inverted: false,
    vignette: false,
    width: null,
    height: null,
    animationSpeed: 1000,
    pointerEvents: "none",
    removeOnSuspension: false
  },

  // Define required styles.
  getStyles: function () {
    return [this.file("./styles/MMM-FF-Evan-Roth-Red-Lines.css")];
  },

  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.classList.add("red-lines-wrapper");
    if (this.config.width) wrapper.style.width = this.config.width;
    if (this.config.height) wrapper.style.height = this.config.height;

    if (this.config.vignette) {
      var vignette = document.createElement("div");
      vignette.classList.add("red-lines-vignette");
      vignette.style.boxShadow = `#000 0 0 ${this.config.vignette} inset`;
      wrapper.appendChild(vignette);
    }

    return wrapper;
  },

  suspend: function () {
    this.suspended = true;
    if (!this.config.removeOnSuspension) return;
    document.getElementById(this.identifier)?.classList.add("suspended");
    var iframe = document.getElementsByClassName("red-lines-iframe")[0];
    if (iframe) setTimeout(() => iframe.remove(), this.config.animationSpeed);
  },

  resume: function () {
    document.getElementById(this.identifier)?.classList.remove("suspended");

    if (this.suspended === false) return;
    this.suspended = false;

    var iframe = document.getElementsByClassName("red-lines-iframe")[0];
    if (iframe) return;

    var wrapper = document.getElementsByClassName("red-lines-wrapper")[0];

    iframe = document.createElement("iframe");
    iframe.classList.add("red-lines-iframe");
    iframe.classList.toggle("grayscale", this.config.grayscale);
    iframe.classList.toggle("inverted", this.config.inverted);
    iframe.style.pointerEvents = this.config.pointerEvents;

    iframe.setAttribute("src", "https://s33.806901e151.299299.com.au/redlines");
    wrapper.appendChild(iframe);
  }
});
