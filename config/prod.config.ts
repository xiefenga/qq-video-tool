import { join } from 'path'
import { Configuration } from 'webpack'
import metadata from './userscript-metadata'
import OpenBrowserPlugin from '../plugin/open-browser-plugin'
import UserscriptWebpackPlugin from 'userscript-webpack-plugin'

const config: Configuration = {
  devtool: false,
  entry: {
    main: join(__dirname, '../src/index.ts'),
  },
  output: {
    filename: 'index.user.js',
  },
  plugins: [
    new UserscriptWebpackPlugin({ metadata }),
    new OpenBrowserPlugin({
      url: 'file://' + join(__dirname, '../dist/index.user.js'),
    }),
  ],
}

export default config
