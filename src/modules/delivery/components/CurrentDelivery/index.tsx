import * as React from 'react'
import { View, Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import DeliveryBook from '../DeliveryBook/index'
import ConfirmDelivery from '../ConfirmDelivery'

export interface ICurrentDeliveryProps {
  confirmDeliveryModalOpen: boolean;
  closeConfirmDeliveryModal: () => void;
  openConfirmDeliveryModal: () => void;
  onQRCodeRead: (qrCode: string) => void;
}
const CurrentDelivery: React.SFC<ICurrentDeliveryProps> = ({
  confirmDeliveryModalOpen,
  closeConfirmDeliveryModal,
  openConfirmDeliveryModal,
  onQRCodeRead,
}) => (
  <View flex>
    <DeliveryBook />
    <Button
      backgroundColor={Colors.PRIMARY_COLOR}
      label='Confirmar entrega'
      size='large'
      fullWidth
      borderRadius={0}
      onPress={openConfirmDeliveryModal}
    />
    <ConfirmDelivery
      isVisible={confirmDeliveryModalOpen}
      onRequestClose={closeConfirmDeliveryModal}
      onQRCodeRead={onQRCodeRead}
    />
  </View>
)

export default CurrentDelivery
