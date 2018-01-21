import * as React from 'react'
import { TextInput, Button } from 'react-native-ui-lib'

const TextInputWidget = ({
  input,
  meta,
  ...props
}) => (
  <TextInput
    onChangeText={input.onChange}
    value={input.value}
    error={meta.error}
    enableErrors
    {...props}
  />
)

export default TextInputWidget
