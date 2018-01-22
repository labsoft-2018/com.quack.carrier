import { makeHot } from 'haul/hot';
import { Navigation } from 'react-native-navigation'

import SignIn from './modules/auth/screens/SignIn'
import WaitingDelivery from './modules/delivery/screens/WaitingDelivery';
import AcceptDelivery from './modules/delivery/screens/AcceptDelivery';
import CurrentDelivery from './modules/delivery/screens/CurrentDelivery';
import DeliverSuccess from './modules/delivery/screens/DeliverySuccess';

import { Screens } from './resources/screens'

const registerScreen = (name, ScreenComponent) => {
  Navigation.registerComponent(name, makeHot(() => ScreenComponent, name))
}

export default () => {
  registerScreen(Screens.SignIn, SignIn)
  registerScreen(Screens.WaitingDelivery, WaitingDelivery)
  registerScreen(Screens.AcceptDelivery, AcceptDelivery)
  registerScreen(Screens.CurrentDelivery, CurrentDelivery)
  registerScreen(Screens.DeliverySuccess, DeliverSuccess)
}
