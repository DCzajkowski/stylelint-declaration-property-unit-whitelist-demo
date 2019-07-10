module.exports = () => ({
  plugins: [
    require('postcss-reporter'),
    require('postcss-import')({ addModulesDirectories: ['src/common'] }),
    require('postcss-mixins'),
    require('postcss-cssnext')({
      features: {
        rem: false,
      },
    }),
    require('postcss-custom-media'),
  ],
});
