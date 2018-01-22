import * as React from 'react'
import WaitingDelivery from '../../components/WaitingDelivery'
import { navigateToAcceptDelivery } from '../../../../navigation'

export default ({
  navigator,
}) => (
  <WaitingDelivery
    onDeliveryAvailable={() => {
      navigateToAcceptDelivery(navigator)
    }}
  />
)
