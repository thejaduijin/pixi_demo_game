const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.ts', // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js','.css'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Process TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Apply style-loader and css-loader
      },
      {
        test: /\.svg$/, // Add rule for SVG files
        use: [
          {
            loader: 'file-loader', // Use file-loader to import SVGs as files
            options: {
              name: '[name].[hash].[ext]', // Naming convention for the SVG files
              outputPath: 'assets/', // Output the SVGs in an 'assets' folder
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the dist folder
    new HtmlWebpackPlugin({
      template: './index.html', // Template HTML file
    }),
  ],
  devtool: 'source-map', // Enables source maps for debugging
  devServer: {
    static: [
      path.join(__dirname, 'dist'), // Serve files from dist folder
      path.join(__dirname, 'public')  // Also serve assets from the public folder
    ],
    open: true, // Automatically open in the browser
    port: 3000, // Port number for the dev server
  },
};
