import { makeHot } from 'haul/hot';
import { Navigation } from 'react-native-navigation'

import SignIn from '../modules/auth/screens/SignIn'
import WaitingDelivery from '../modules/delivery/screens/WaitingDelivery';
import AcceptDelivery from '../modules/delivery/screens/AcceptDelivery';
import CurrentDelivery from '../modules/delivery/screens/CurrentDelivery';
import DeliverSuccess from '../modules/delivery/screens/DeliverySuccess';

import { Screens } from './screen-names'
import { apolloProviderHOC } from '../modules/base/hocs/apollo'
import WaypointScreen from '../modules/base/screens/Waypoint/index'
import SettingsScreen from '../modules/settings/screens/Settings/index'

const registerScreen = (name, ScreenComponent, apolloClient, socketClient) => {
  Navigation.registerComponent(name, makeHot(() => apolloProviderHOC(ScreenComponent, apolloClient, socketClient), name))
}

export default (apolloClient, socketClient) => {
  registerScreen(Screens.SignIn, SignIn, apolloClient, socketClient)
  registerScreen(Screens.WaitingDelivery, WaitingDelivery, apolloClient, socketClient)
  registerScreen(Screens.AcceptDelivery, AcceptDelivery, apolloClient, socketClient)
  registerScreen(Screens.CurrentDelivery, CurrentDelivery, apolloClient, socketClient)
  registerScreen(Screens.DeliverySuccess, DeliverSuccess, apolloClient, socketClient)
  registerScreen(Screens.Waypoint, WaypointScreen, apolloClient, socketClient)
  registerScreen(Screens.Settings, SettingsScreen, apolloClient, socketClient)
}
