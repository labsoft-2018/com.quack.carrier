import * as React from 'react'
import WaitingDelivery from '../../components/WaitingDelivery'
import { navigateToAcceptDelivery } from '../../../../navigation/actions'

export default ({
  navigator,
}) => (
  <WaitingDelivery
    onDeliveryAvailable={() => {
      navigateToAcceptDelivery(navigator)
    }}
  />
)
