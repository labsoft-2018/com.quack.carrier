import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import WaitingDelivery from '../../containers/WaitingDelivery'

export default class WaitingDeliveryScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: false,
  }
  public render() {
    return (
      <ScreenWrapper>
        <WaitingDelivery
          navigator={this.props.navigator}
        />
      </ScreenWrapper>
    )
  }
}
