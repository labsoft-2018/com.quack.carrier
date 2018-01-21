import * as React from 'react'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import DeliverSuccess from '../../components/DeliverSuccess/index'

export default class DeliverSuccessScreen extends React.Component {
  public static navigatorStyle = {
    navBarHidden: true,
  }

  public render() {
    return (
      <ScreenWrapper>
        <DeliverSuccess
          onPressFinish={() => {
            alert('handlePressFinish')
          }}
        />
      </ScreenWrapper>

    )
  }
}