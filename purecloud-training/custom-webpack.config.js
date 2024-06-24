const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      STABLE_FEATURE: JSON.stringify(true),
      EXPERIMENTAL_FEATURE: JSON.stringify(false),
    }),
  ],
  resolve: {
    mainFields: ["main"],
  },
  externals: {
    "purecloud-platform-client-v2": "require('platformClient')",
  },
};
