import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import registerScreens from './screens';
import configTheme from './config/theme'
import { navigateToSignIn } from './navigation'

const startApp = () => {
  configTheme()
  registerScreens()
  navigateToSignIn()
}

startApp()

// if (module.hot) {
//   module.hot.accept(() => {})
//   module.hot.accept('./App', () => {
//     clearCacheFor(require.resolve('./App'));
//     redraw(() => require('./App').default, getScreenName(BUNDLE_IDENTIFIER, 'App'));
//   });  
// }