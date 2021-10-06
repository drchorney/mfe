module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // js files processed by babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'], // JSX, and ES16,17,18
            plugins: ['@babel/plugin-transform-runtime'], // async await syntax and few other things
          }
        }
      }
    ]
  }
};
