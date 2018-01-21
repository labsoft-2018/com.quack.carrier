import * as React from 'react'
import { View, Text } from 'react-native-ui-lib'
import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import ModalBox from '../../../common/components/ModalBox/index'
import ScanQRCode from '../../../common/components/ScanQRCode/index'

export interface IQRCodeModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onQRCodeRead: (qrCode: string) => void;
}

const QRCodeModal: React.SFC<IQRCodeModalProps> = ({
  isVisible,
  onRequestClose,
  onQRCodeRead,
}) => (
  <ModalBox isVisible={isVisible} onRequestClose={onRequestClose} bodyStyle={styles.bodyStyle}>
    <View style={styles.scanWrapper}>
      <ScanQRCode
        onQRCodeRead={onQRCodeRead}
      />
      <Text h6 style={styles.message}>
        Escaneie o QRCode do cliente para finalizar a entrega
      </Text>
    </View>
  </ModalBox>
)

const styles = StyleSheet.create({
  scanWrapper: {
    height: 300
  } as ViewStyle,
  bodyStyle: {
    padding: 0
  } as ViewStyle,
  message: {
    margin: 10,
    textAlign: 'center'
  } as TextStyle,
})

export default QRCodeModal
