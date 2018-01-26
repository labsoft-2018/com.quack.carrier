import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import { AsyncStorage } from 'react-native';
import { Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import { loadSignInScreen } from '../../../../navigation/actions'

export default class SettingsScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: false,
  }

  public handleLogout = () => {
    AsyncStorage.removeItem('token')
    loadSignInScreen()
  }

  public render() {
    return (
      <ScreenWrapper>
        <Button
          backgroundColor={Colors.DANGER}
          label='Sair'
          size='large'
          fullWidth
          borderRadius={0}
          onPress={this.handleLogout}
        />
      </ScreenWrapper>
    )
  }
}
