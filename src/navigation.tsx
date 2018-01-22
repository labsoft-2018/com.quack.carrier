import { Navigation } from 'react-native-navigation'
import { Screens } from './resources/screens'

export const navigateToSignIn = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.DeliverySuccess,
    },
    animationType: 'fade',
  });
}
