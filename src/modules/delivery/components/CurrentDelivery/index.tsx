import * as React from 'react'
import { View, Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import DeliveryBook from '../DeliveryBook/index'
import ConfirmDelivery from '../ConfirmDelivery'

const CurrentDelivery: React.SFC<{}> = ({

}) => (
  <View flex>
    <DeliveryBook />
    <Button
      backgroundColor={Colors.PRIMARY_COLOR}
      label='Confirmar entrega'
      size='large'
      fullWidth
      borderRadius={0}
      onPress={() => {
        alert('confirmar entrega')
      }}
    />
    <ConfirmDelivery
      isVisible={false}
      onRequestClose={() => {
        alert('on request close')
      }}
      onQRCodeRead={() => {
        alert('on qrcode read')
      }}
    />
  </View>
)

export default CurrentDelivery
