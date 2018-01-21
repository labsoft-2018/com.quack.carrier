import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import { Navigation } from 'react-native-navigation'
import { BUNDLE_IDENTIFIER } from './resources/constants';
import { registerScreens, getScreenName } from './screens';
import configTheme from './config/theme'


const startApp = () => {
  configTheme()
  // Navigation.startTabBasedApp({
  //   tabs: [
  //     {
  //       label: 'One',
  //       screen: getScreenName(BUNDLE_IDENTIFIER, 'SignIn'), // this is a registered name for a screen
  //       title: 'Screen One'
  //     }
  //   ]
  // });

  Navigation.startSingleScreenApp({
    screen: {
      screen: getScreenName(BUNDLE_IDENTIFIER, 'Order'),
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
}

registerScreens()
startApp()

if (module.hot) {
  module.hot.accept(() => {})
  module.hot.accept('./App', () => {
    clearCacheFor(require.resolve('./App'));
    redraw(() => require('./App').default, getScreenName(BUNDLE_IDENTIFIER, 'App'));
  });  
}