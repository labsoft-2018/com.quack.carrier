import * as React from 'react'
import { View } from 'react-native-ui-lib'
import Camera from 'react-native-camera';
import { StyleSheet } from 'react-native'

export interface IScanQRCodeProps {

}

export default class ScanQRCode extends React.Component<IScanQRCodeProps> {
  camera: Camera

  private handleBarcodeRead = (e) => {
    alert(JSON.stringify(e))
  }

  render() {
    return (
      <View flex>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
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
