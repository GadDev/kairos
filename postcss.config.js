module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 1
    }),
    require("postcss-nested-ancestors"),
    require("postcss-nested"),
    require("autoprefixer")
  ]
};
