import * as React from 'react'
import { StyleSheet, TextStyle, ViewStyle, Switch } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import loadingAnimation from '../../../../resources/animations/loading'
import AutoPlayLottie from '../../../common/components/AutoPlayLottie/index'

const WaitingDelivery: React.SFC<{}> = () => (
  <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <AutoPlayLottie
        source={loadingAnimation}
      />
    </View>

    <Text style={styles.text}>
      Aguardando missões...
    </Text>

    <View row centerV centerH style={{marginBottom: 30}} >
      <Text style={{marginRight: 20}} >
        Disponível para missões
      </Text>
      <Switch value />
    </View>
  </View>
)

const styles = StyleSheet.create({
  loading: {
    marginVertical: 40,
  } as ViewStyle,
  text: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  } as TextStyle,
})
export default WaitingDelivery
