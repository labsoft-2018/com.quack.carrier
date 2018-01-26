import { Navigation } from 'react-native-navigation'
import { Screens } from './screen-names'
import { AppTheme } from '../resources/app-theme'

export const loadSignInScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.SignIn,
    },
    animationType: 'fade',
  });
}

export const loadMainScreen = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Missões',
        screen: Screens.WaitingDelivery,
        title: 'Missões',
      },
      {
        label: 'Configurações',
        screen: Screens.Settings,
        title: 'Configurações',
      },
    ],
    animationType: 'fade',
    tabsStyle: {
      tabBarButtonColor: AppTheme.tabBarButtonColor,
      tabBarSelectedButtonColor: AppTheme.tabBarSelectedButtonColor,
      tabBarBackgroundColor: AppTheme.tabBarBackgroundColor,
      tabBarLabelColor: AppTheme.tabBarLabelColor,
      tabBarSelectedLabelColor: AppTheme.tabBarSelectedLabelColor,
    },
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

export const loadWaypoint = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: Screens.Waypoint,
    },
    animationType: 'fade',
  });
}
