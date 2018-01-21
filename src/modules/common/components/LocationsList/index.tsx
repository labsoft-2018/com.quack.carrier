import * as React from 'react'
import { FlatList } from 'react-native'
import LocationsListItem, { ILocationsListItemProps } from '../LocationsListItem'

const LocationsFlatList = FlatList as FlatList<ILocationsListItemProps>

export interface ILocationsListProps {
  locations: ILocationsListItemProps[];
}
const LocationsList: React.SFC<ILocationsListProps> = ({
  locations
}) => (
  <LocationsFlatList
    keyExtractor={(item) => item.id}
    data={locations}
    renderItem={({ item }) => <LocationsListItem {...item} />}
  />
)

export default LocationsList