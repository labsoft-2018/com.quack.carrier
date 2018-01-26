import { Screens } from './screen-names'
import { AppTheme } from '../resources/app-theme'
export const signInApp = {
  screen: {
    screen: Screens.SignIn,
  },
  animationType: 'fade',
}

export const mainTabsApp = {
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
}
