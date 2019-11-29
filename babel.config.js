module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-env",
      "module:metro-react-native-babel-preset"
    ],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ], [
        "@babel/plugin-proposal-object-rest-spread"
      ]
      
    ]
  };
};