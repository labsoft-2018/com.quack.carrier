import SignInForm from '../../components/SignInForm/index'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Alert, AsyncStorage } from 'react-native';
import { loadMainScreen } from '../../../../navigation/actions'

const CARRIER_SIGN_IN_WITH_EMAIL = gql`
mutation ($email: String, $password: String){
  carrierSignInWithEmail(email: $email, password: $password) {
    user {
      id
      type
      email
    }
    token
  }
}
`

const storeToken = (token: String) => {
  return AsyncStorage.setItem('token', token);
}

export default graphql(CARRIER_SIGN_IN_WITH_EMAIL, {
  props: ({ mutate }) => ({
    carrierSignInWithEmail: async ({email, password}) => {
      try {
        const response = await mutate({
          variables: {
            email,
            password,
          },
        })
        await storeToken(response.data.carrierSignInWithEmail.token)
        loadMainScreen()
      } catch (err) {
        Alert.alert('Error', err.toString())
      }
    },
  }),
})(SignInForm)
