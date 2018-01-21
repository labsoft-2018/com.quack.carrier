import * as React from 'react'
import { View, Text, Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'

export interface IMissionDetailProps {
  onAcceptMission: () => void;
  onDeclineMission: () => void;
}

export interface ILocationBlockProps {
  name: string;
  address: string;
}

const LocationBlock: React.SFC<ILocationBlockProps> = ({
  name,
  address
}) => (
  <View>
    <Text>{name}</Text>
    <Text>{address}</Text>
  </View>
)

const MissionDetail: React.SFC<IMissionDetailProps> = ({
  onAcceptMission,
  onDeclineMission,
}) => (
  <View>
    <LocationBlock
      name="Sua localização"
      address="Bla"
    />
    <LocationBlock
      name="MC Donalds"
      address="Bla"
    />
    <LocationBlock
      name="Jorge Risco"
      address="Bla"
    />
    <View row centerV centerH>
      <Text>
        Tempo total estimado do trajeto:
      </Text>
      <Text>
        1 hora
      </Text>
    </View>

    <View row>
    <Button
        color={Colors.PRIMARY_COLOR}
        label="Negar"
        size='large'
        fullWidth
        borderRadius={0}
        onPress={onDeclineMission}
      />
      <Button
        backgroundColor={Colors.PRIMARY_COLOR}
        label="Aceitar missão"
        size='large'
        fullWidth
        borderRadius={0}
        onPress={onAcceptMission}
      />
    </View>
  </View>
)

export default MissionDetail