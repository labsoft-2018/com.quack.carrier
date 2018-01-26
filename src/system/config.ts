export interface IConfig {
  graphQLEndpoint: string
}

export enum Env {
  DEV = 'dev',
  PROD = 'prod',
}

const prodConfig: IConfig = {
  graphQLEndpoint: 'http://localhost:8670/graphql',
}

const devConfig: IConfig = {
  graphQLEndpoint: 'http://localhost:8670/graphql',
}
export const newConfig = (env: Env) => {
  switch (env) {
    case Env.PROD: return prodConfig
    case Env.DEV: default: return devConfig;
  }
}
