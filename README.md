<video width="320" muted="" loop="" playsinline="" autoplay="autoplay" poster="https://www.redlines.network/videos/PHONE%20COMPUTER_02_SQ.jpg">
  <source src="https://www.redlines.network/videos/PHONE%20COMPUTER_02_SQ-rf24.mp4" type="video/mp4">
</video>

# MMM-FF-Evan-Roth-Red-Lines

[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)](https://choosealicense.com/licenses/isc)

A module for [MagicMirror²](https://github.com/MichMich/MagicMirror) wrapping Evan Roth's artwork "Red Lines" (2018). If you wonder what it is or why it's important, head to

https://www.redlines.network/

or check out installations and talks on [youtube](https://www.youtube.com/results?search_query=evan+roth+red+lines).

## Installation

```
git clone https://github.com/shin10/MMM-FF-Evan-Roth-Red-Lines.git
```

## Configuration

```javascript
modules: [
  {
    module: "MMM-FF-Evan-Roth-Red-Lines",
    position: "fullscreen_below",
    hiddenOnStartup: true,
    disabled: false,
    config: {
      width: "100%",
      height: "100%",
      grayscale: false,
      inverted: false,
      pointerEvents: "none",
      removeOnSuspension: true
    }
  }
];
```

`removeOnSuspension` will remove the iframe when the module is suspended and add it back again when resumed. That may save resources but also skip fading if you're for example using the MMM-pages module.

**Also please note that the project is using external resources and a p2p netring.**

The `pointerEvents` are set to `none` by default to allow touch gesture recognition from other MagicMirror² modules. If you rather like to use the original UI of the piece, you can change it to what you like best.
