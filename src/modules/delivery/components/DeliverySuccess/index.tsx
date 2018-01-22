import * as React from 'react'
import AutoPlayLottie from '../../../common/components/AutoPlayLottie/index'
import successAnimation from '../../../../resources/animations/success'
import { View, Button, Text } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import { TextStyle, StyleSheet } from 'react-native'

export interface IDeliverSuccessProps {
  onPressFinish: () => void;
}

const DeliverySuccess: React.SFC<IDeliverSuccessProps> = ({
  onPressFinish,
}) => (
  <View flex>
    <View flex centerV>
      <Text h4 style={styles.message}>Parabéns pela entrega!</Text>
      <View style={{height: 400}}>
        <AutoPlayLottie
          source={successAnimation}
          loop={false}
          speed={0.9}
        />
      </View>
    </View>
    <Button
      backgroundColor={Colors.PRIMARY_COLOR}
      label='Finalizar'
      size='large'
      fullWidth
      borderRadius={0}
      onPress={onPressFinish}
    />
  </View>

)

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
  } as TextStyle,
})

export default DeliverySuccess
