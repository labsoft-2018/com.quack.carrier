import * as React from 'react'
import { View, Text, Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'
import LocationsList from '../../../location/components/LocationsList/index'

export interface IAcceptDeliveryProps {
  onAcceptMission: () => void;
  onDeclineMission: () => void;
  locations: any[];
}

const AcceptDelivery: React.SFC<IAcceptDeliveryProps> = ({
  onAcceptMission,
  onDeclineMission,
  locations,
}) => (
  <View flex>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
      />
      <MapView.Marker
        coordinate={{
          latitude: 30.78825,
          longitude: -112.4324,
        }}
      />
      <MapView.Marker
        coordinate={{
          latitude: 40.78825,
          longitude: -132.4324,
        }}
      />
    </MapView>
    <LocationsList
      locations={locations}
    />
    <View row centerV centerH style={{marginBottom: 20}} >
      <Text h5 style={{marginRight: 10}} >
        Tempo total estimado do trajeto:
      </Text>
      <Text h5Bold>
        1 hora
      </Text>
    </View>

    <View row style={{padding: 10}} >
      <Button
        color={Colors.PRIMARY_COLOR}
        backgroundColor='transparent'
        label='Negar'
        size='large'
        borderRadius={10}
        onPress={onDeclineMission}
        style={{flex: 1}}
      />
      <Button
        backgroundColor={Colors.PRIMARY_COLOR}
        label='Aceitar missão'
        size='large'
        borderRadius={30}
        onPress={onAcceptMission}
        style={{flex: 2}}
      />
    </View>
  </View>
)
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  map: {
    width,
    height: 200,
  },
})

export default AcceptDelivery
