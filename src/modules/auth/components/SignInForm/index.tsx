import * as React from 'react'
import { View, TextStyle, ViewStyle } from 'react-native'
import { Form, Field } from 'react-final-form'
import { Button } from 'react-native-ui-lib'
import { Colors } from '../../../../resources/colors'
import TextInputWidget from '../../../widgets/TextInput/index'

export interface IValues {
  email: string;
  password: string;
}
export interface ISignInFormProps {
  onSubmit: (values: IValues) => void
  validate: (values: IValues) => any
}

const SignInForm: React.SFC<ISignInFormProps> = ({
  onSubmit,
  validate,
}) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <Field
            name="login"
            component={TextInputWidget}
            placeholder="E-mail"
            autoCapitalize='none'
            underlineColor={Colors.PRIMARY_COLOR}
            />
          <Field
            name="password"
            component={TextInputWidget}
            secureTextEntry
            autoCapitalize='none'
            placeholder="Senha"
            underlineColor={Colors.PRIMARY_COLOR}
          />
        </View>
        <Button
          backgroundColor={Colors.PRIMARY_COLOR}
          label="Login"
          size='large'
          fullWidth
          borderRadius={0}
          style={styles.button}
          disabled={invalid || pristine}
          onPress={handleSubmit}
        />
      </View>
    )}
  />
)

const styles = {
  button: {
    marginTop: 50
  } as TextStyle,
  formWrapper: {
    flex: 1,
  } as ViewStyle,
  inputWrapper: {
    marginHorizontal: 20,
    flex: 1,
  } as TextStyle
}
export default SignInForm
