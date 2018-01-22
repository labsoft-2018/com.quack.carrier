import * as React from 'react'
import DeliverySuccess from '../../components/DeliverySuccess'
import { resetToWaitingDelivery } from '../../../../navigation';

export default ({
  navigator,
}) => (
  <DeliverySuccess
    onPressFinish={() => {
      resetToWaitingDelivery(navigator)
    }}
  />
)
