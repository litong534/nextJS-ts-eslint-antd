const pxtovw = require('postcss-px-to-viewport');

module.exports = {
  plugins: [
    pxtovw({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/i
    })
  ]
}