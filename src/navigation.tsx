import { Navigation } from 'react-native-navigation'
import { Screens } from './resources/screens'

export const navigateToSignIn = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.SignIn,
    },
    animationType: 'fade',
  });
}

export const navigateToWaitingMission = (navigator) => {
  navigator.push({
    screen: Screens.WaitingDelivery,
  })
}

export const navigateToAcceptDelivery = (navigator) => {
  navigator.push({
    screen: Screens.AcceptDelivery,
  })
}

export const navigateToCurrentDelivery = (navigator) => {
  navigator.push({
    screen: Screens.CurrentDelivery,
  })
}

export const navigateToDeliverySuccess = (navigator) => {
  navigator.push({
    screen: Screens.DeliverySuccess,
  })
}

export const resetToWaitingDelivery = (navigator) => {
  navigator.resetTo({
    screen: Screens.WaitingDelivery,
  })
}
