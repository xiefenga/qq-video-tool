import { join } from 'path'
import { Configuration } from 'webpack'
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
    new UserscriptWebpackPlugin({
      metadata: {
        name: 'qq.video.tool',
        match: 'https://v.qq.com/x/cover/*',
        version: '0.0.1',
        namespace: '@xiefeng/qq.video.tool',
        author: 'xiefeng',
      },
    }),
    new OpenBrowserPlugin({
      url: 'file://' + join(__dirname, '../dist/index.user.js'),
    }),
  ],
}

export default config
