import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import AcceptDelivery from '../../containers/AcceptDelivery'

export default class AcceptDeliveryScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  public render() {
    return (
      <ScreenWrapper>
        <AcceptDelivery
          navigator={this.props.navigator}
        />
      </ScreenWrapper>
    )
  }
}
