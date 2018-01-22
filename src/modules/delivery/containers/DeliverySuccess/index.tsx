import * as React from 'react'
import DeliverySuccess from '../../components/DeliverySuccess'

export default () => <DeliverySuccess
  onPressFinish={() => {
    alert('finish')
  }}
/>
