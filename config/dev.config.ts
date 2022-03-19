import { join } from 'path'
import { Configuration } from 'webpack'
import metadata from './userscript-metadata'
import OpenBrowserPlugin from '../plugin/open-browser-plugin'
import UserscriptWebpackPlugin from 'userscript-webpack-plugin'

const config: Configuration = {
  entry: {
    entry: join(__dirname, '../public/dev.entry.ts'),
    main: join(__dirname, '../src/index.ts'),
  },
  output: {
    filename: '[name]@dev.user.js',
  },
  plugins: [
    new UserscriptWebpackPlugin({
      metadata: {
        ...metadata,
        require: ['file://' + join(__dirname, '../dist/main@dev.user.js')],
      },
    }),
    new OpenBrowserPlugin({
      url: 'file://' + join(__dirname, '../dist/entry@dev.user.js'),
    }),
  ],
}

export default config
