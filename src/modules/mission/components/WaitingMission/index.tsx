import * as React from 'react'
import { StyleSheet, ActivityIndicator, TextStyle, ViewStyle, Switch } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import LottieView from 'lottie-react-native';
import loadingAnimation from './loading'

class Animation extends React.Component {
  animation: any
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={loadingAnimation}
      />
    )
  }
}

const WaitingMission: React.SFC<{}> = () => (
  <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <Animation />
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
    marginVertical: 40
  } as ViewStyle,
  text: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center'
  } as TextStyle
})
export default WaitingMission