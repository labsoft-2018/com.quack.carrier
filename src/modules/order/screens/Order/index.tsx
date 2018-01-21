import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import ProductList from '../../components/ProductList'
import OrderBook from '../../components/OrderBook'



export default class OrderScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  render() {
    return (
      <ScreenWrapper>
        <OrderBook />
      </ScreenWrapper>
      
    )
  }
}

const styles = StyleSheet.create({

})