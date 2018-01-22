import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import CurrentDelivery from '../../containers/CurrentDelivery'

export default class CurrentDeliveryScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }
  public render() {
    return (
      <ScreenWrapper>
        <CurrentDelivery />
      </ScreenWrapper>
    )
  }
}
