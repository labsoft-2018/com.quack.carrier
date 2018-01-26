import * as React from 'react'
import { View, Text } from 'react-native-ui-lib'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Colors } from '../../../../resources/colors'

export interface ILocationsListItemProps {
  id: string;
  name: string;
  address: string;
}
const LocationsListItem: React.SFC<ILocationsListItemProps> = ({
  name,
  address,
}) => (
  <View row centerV style={{ padding: 20 }}>
    <EvilIcons
      name='location'
      size={40}
      style={{marginRight: 20}}
      color={Colors.PRIMARY_COLOR}
    />
    <View>
      <Text h3>{name}</Text>
      <Text h5>{address}</Text>
    </View>
  </View>
)
export default LocationsListItem
