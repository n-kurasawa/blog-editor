module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader:
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          },
        ],
      },
    ],
  },
};
