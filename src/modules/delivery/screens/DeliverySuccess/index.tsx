import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import DeliverySuccess from '../../containers/DeliverySuccess'

export default class DeliverySuccessScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  public render() {
    return (
      <ScreenWrapper>
        <DeliverySuccess />
      </ScreenWrapper>
    )
  }
}
