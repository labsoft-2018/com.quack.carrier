import * as React from 'react'
import { View } from 'react-native-ui-lib'
import Camera from 'react-native-camera';
import { StyleSheet, TouchableOpacity } from 'react-native'

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
        <TouchableOpacity onPress={() => {
          this.props.onQRCodeRead('fake')
        }}
        style={{flex: 1}}>
          <Camera
            onBarCodeRead={this.handleBarcodeRead}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },
})
