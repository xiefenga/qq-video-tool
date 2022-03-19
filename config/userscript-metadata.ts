import { join } from 'path'
import { UserScriptMetaData } from 'userscript-webpack-plugin'

const metadata: Partial<UserScriptMetaData> = {
  name: 'qq.video.tool',
  match: 'https://v.qq.com/x/cover/*',
  version: require(join(__dirname, '../package.json')).version ?? '0.01',
  namespace: '@xiefeng/qq.video.tool',
  author: 'xiefeng',
  description: '腾讯视频全屏优化',
  icon: 'https://www.google.com/s2/favicons?sz=64&domain=v.qq.com',
}

export default metadata
