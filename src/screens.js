import { makeHot, tryUpdateSelf, callOnce, clearCacheFor, redraw } from 'haul/hot';
import App from './App';
import SignIn from './modules/auth/screens/SignIn'
import { Navigation } from 'react-native-navigation'
import { BUNDLE_IDENTIFIER } from './resources/constants';
import MissionsScreen from './modules/mission/screens/Missions';
import OrderScreen from './modules/order/screens/Order';
import DeliverSuccessScreen from './modules/order/screens/DeliverSuccess/index';

export const getScreenName = (bundleIdentifier, screenName) => `${bundleIdentifier}.${screenName}`

const registerScreen = (name, ScreenComponent) => {
  Navigation.registerComponent(getScreenName(BUNDLE_IDENTIFIER, name), makeHot(() => ScreenComponent, getScreenName(BUNDLE_IDENTIFIER, name)))
}

export const registerScreens = () => {
  registerScreen('App', App)
  registerScreen('SignIn', SignIn)
  registerScreen('Missions', MissionsScreen)
  registerScreen('Order', OrderScreen)
  registerScreen('DeliverSuccess', DeliverSuccessScreen)

}

