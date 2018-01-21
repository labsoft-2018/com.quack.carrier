import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import ProductList from '../../components/ProductList'

const products = [{
  id: 'a',
  name: 'BigMac',
  description: 'hamb',
  quantity: 3
}, {
  id: 'b',
  name: 'BigMac 2',
  description: 'hamb',
  quantity: 3
}, {
  id: 'c',
  name: 'BigMac 3',
  description: 'hamb',
  quantity: 3
}]

export default class OrderScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  render() {
    return (
      <ScreenWrapper>
        <ProductList products={products} />
      </ScreenWrapper>
      
    )
  }
}

const styles = StyleSheet.create({

})