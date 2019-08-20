const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const path = require('path');
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent");
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withPlugins([withCss, withSass, withTM],{
  transpileModules: ["antd-mobile", "antd"],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        );
      }
    }
  },
  webpack(config) {
    const eslintRole = {
      enforce: 'pre',
      test: /.(js|jsx|ts|tsx)/,
      loader: 'eslint-loader',
      exclude: [path.resolve(__dirname, '/node_modules')],
    };
    config.module.rules.push(eslintRole);
    return config;
  },
});
