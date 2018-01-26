import { Navigation } from 'react-native-navigation'
import { Screens } from './screen-names'
import { mainTabsApp, signInApp } from './apps'

export const loadSignInScreen = () => {
  Navigation.startSingleScreenApp(signInApp);
}

export const loadMainScreen = () => {
  Navigation.startTabBasedApp(mainTabsApp);
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

export const loadWaypoint = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.Waypoint,
    },
    animationType: 'fade',
  });
}
