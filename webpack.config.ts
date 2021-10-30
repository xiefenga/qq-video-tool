import merge from 'webpack-merge'
import dev from './config/dev.config'
import base from './config/base.config'
import prod from './config/prod.config'

interface ENV {
  dev?: boolean
  prod?: boolean
}

export default (env: ENV) => merge(base, env.dev ? dev : prod)
