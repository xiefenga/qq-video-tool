import { join } from 'path'
import { Configuration } from 'webpack'
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
        name: 'qq.video.tool@dev',
        match: 'https://v.qq.com/x/cover/*',
        version: '0.0.1',
        namespace: '@xiefeng/qq.video.tool',
        require: ['file://' + join(__dirname, '../dist/main@dev.user.js')],
        author: 'xiefeng',
      },
    }),
    new OpenBrowserPlugin({
      url: 'file://' + join(__dirname, '../dist/entry@dev.user.js'),
    }),
  ],
}

export default config
