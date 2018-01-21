import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import ProductList from '../../components/ProductList'
import OrderBook from '../../components/OrderBook'
import { Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import QRCodeModal from '../../components/QRCodeModal/index'



export default class OrderScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <ScreenWrapper>
        <OrderBook />
        <Button
          backgroundColor={Colors.PRIMARY_COLOR}
          label="Confirmar entrega"
          size='large'
          fullWidth
          borderRadius={0}
          onPress={() => {}}
        />
        <QRCodeModal
          isVisible
          onRequestClose={() => {
            
          }}
          onQRCodeRead={() => {
            
          }}
        />
      </ScreenWrapper>
      
    )
  }
}

const styles = StyleSheet.create({

})