import open from 'open'
import { Compiler } from 'webpack'

interface PluginOption {
  url: string
}

export default class OpenBrowserPlugin {

  private static LIMIT_RUN_TIME = 1

  private runTime: number = 0

  private option: PluginOption

  public constructor(option: PluginOption) {
    this.option = option
  }

  public apply(compiler: Compiler): void {
    compiler.hooks.afterEmit.tap('OpenBrowserPlugin', async () => {
      if (this.runTime < OpenBrowserPlugin.LIMIT_RUN_TIME) {
        this.runTime++
        await open(this.option.url, { app: { name: 'google chrome' } })
        console.log(`open ${this.option.url} in default browser`)
      }
    })
  }
}