import * as React from 'react'
import { View } from 'react-native-ui-lib'
import Camera from 'react-native-camera';
import { StyleSheet } from 'react-native'

export interface IScanQRCodeProps {
  onQRCodeRead: (qrCode: string) => void
}

export default class ScanQRCode extends React.Component<IScanQRCodeProps> {
  private handleBarcodeRead = (e) => {
    this.props.onQRCodeRead(e.data)
  }

  public render() {
    return (
      <View flex>
        <Camera
          onBarCodeRead={this.handleBarcodeRead}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
})
