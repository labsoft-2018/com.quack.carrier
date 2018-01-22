import * as React from 'react'
import { FlatList } from 'react-native'
import ProductListItem, { IProductListItem } from '../ProductListItem'

const ProductFlatList = FlatList as FlatList<IProductListItem>

export interface IProductList {
  products: IProductListItem[];
}
const ProductList: React.SFC<IProductList> = ({
  products,
}) => (
  <ProductFlatList
    keyExtractor={(item) => item.id}
    data={products}
    renderItem={({ item }) => <ProductListItem {...item} />}
  />
)

export default ProductList
