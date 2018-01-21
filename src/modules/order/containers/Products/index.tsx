import * as React from 'react'
import ProductList from '../../components/ProductList/index'

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

export default () => <ProductList products={products} />
