import { join } from 'path'
import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import PrettyOutputWebpackPlugin from 'pretty-output-webpack-plugin'

const config: Configuration = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    path: join(__dirname, '../dist'),
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PrettyOutputWebpackPlugin({
      semi: false,
      singleQuote: true,
    }),
  ],
}

export default config
