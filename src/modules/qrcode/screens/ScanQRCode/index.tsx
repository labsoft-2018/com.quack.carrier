import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import ScanQRCode from '../../components/ScanQRCode'
import ConfirmDelivery from '../../../order/components/ConfirmDeliver'

export default class MissionsScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  render() {
    return (
      <ScreenWrapper>
        <ConfirmDelivery />
      </ScreenWrapper>
    )
  }
}

const styles = StyleSheet.create({

})