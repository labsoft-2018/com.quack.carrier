import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import WaitingDelivery from '../../containers/WaitingDelivery'

export default class WaitingDeliveryScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  public render() {
    return (
      <ScreenWrapper>
        <WaitingDelivery />
      </ScreenWrapper>
    )
  }
}
