import * as React from 'react'
import CurrentDelivery from '../../components/CurrentDelivery'
import { navigateToDeliverySuccess } from '../../../../navigation/actions'
import { Alert } from 'react-native';

export interface ICurrentDeliveryContainerProps {
  navigator: any
}

export interface ICurrentDeliveryContainerState {
  confirmDeliveryModalOpen: boolean;
}

export default class extends React.Component<ICurrentDeliveryContainerProps, ICurrentDeliveryContainerState> {
  public state = {
    confirmDeliveryModalOpen: false,
  }

  private closeConfirmDeliveryModal = () => {
    this.setState({
      confirmDeliveryModalOpen: false,
    })
  }
  private openConfirmDeliveryModal = () => {
    this.setState({
      confirmDeliveryModalOpen: true,
    })
  }

  private handleQRCodeOk = () => {
    this.closeConfirmDeliveryModal()
    setTimeout(() => {
      navigateToDeliverySuccess(this.props.navigator)
    })
  }

  private handleQRCodeRead = (qrCode: string) => {

    Alert.alert(
      'Simulando',
      `Validando ${qrCode}...`,
      [
        { text: 'Ok', onPress: this.handleQRCodeOk},
      ],
    )
  }

  public render() {
    return (
      <CurrentDelivery
        confirmDeliveryModalOpen={this.state.confirmDeliveryModalOpen}
        closeConfirmDeliveryModal={this.closeConfirmDeliveryModal}
        openConfirmDeliveryModal={this.openConfirmDeliveryModal}
        onQRCodeRead={this.handleQRCodeRead}
      />
    )
  }
}
