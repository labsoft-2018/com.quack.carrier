import * as React from 'react'
import DeliverySuccess from '../../components/DeliverySuccess'
import { resetToWaitingDelivery } from '../../../../navigation/actions';

export default ({
  navigator,
}) => (
  <DeliverySuccess
    onPressFinish={() => {
      resetToWaitingDelivery(navigator)
    }}
  />
)
