import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import registerScreens from './navigation/register-screens';
import configReactNativeUiLibTheme from './config/react-native-ui-lib-theme'
import { startAppOnSignIn, loadWaypoint } from './navigation/actions'
import { newApolloClient } from './system/apollo-client'
import { newSocketClient } from './system/socket-client'
import { newConfig, Env } from './system/config'

const boot = (env) => {
  const config = newConfig(env)
  const apolloClient = newApolloClient(config)
  const socketClient = newSocketClient(config)
  configReactNativeUiLibTheme()
  registerScreens(apolloClient, socketClient)
  loadWaypoint()
}

const env = __DEV__ ? Env.DEV : Env.PROD

boot(env)

// if (module.hot) {
//   module.hot.accept(() => {})
//   module.hot.accept('./App', () => {
//     clearCacheFor(require.resolve('./App'));
//     redraw(() => require('./App').default, getScreenName(BUNDLE_IDENTIFIER, 'App'));
//   });  
// }