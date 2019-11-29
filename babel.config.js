module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['react-native'],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  };
};