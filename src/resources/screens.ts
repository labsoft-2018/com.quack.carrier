import { BUNDLE_IDENTIFIER } from './constants'
const getScreenName = (bundleIdentifier, screenName) => `${bundleIdentifier}.${screenName}`

export const Screens = {
  SignIn: getScreenName(BUNDLE_IDENTIFIER, 'SignIn'),
  WaitingDelivery: getScreenName(BUNDLE_IDENTIFIER, 'WaitingDelivery'),
  AcceptDelivery: getScreenName(BUNDLE_IDENTIFIER, 'AcceptDelivery'),
  CurrentDelivery: getScreenName(BUNDLE_IDENTIFIER, 'CurrentDelivery'),
  DeliverySuccess: getScreenName(BUNDLE_IDENTIFIER, 'DeliverySuccess'),
}
