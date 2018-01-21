import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View, Text } from 'react-native-ui-lib'

export interface IProductListItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
}

const ProductListItem: React.SFC<IProductListItem> = ({
  name,
  description,
  quantity
}) => (
  <View row centerV spread style={styles.wrapper}>
    <View>
      <Text h5>
        {name}
      </Text>
      <Text h5 dark20>
        {description}
      </Text>
    </View>

    <Text h4>
      x{quantity}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
})

export default ProductListItem