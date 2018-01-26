import * as React from 'react'
import ConfirmDelivery from '../../components/ConfirmDelivery'

export default () => <ConfirmDelivery
  isVisible
  onRequestClose={() => {
    alert('request close')
  }}
  onQRCodeRead={() => {
    alert('qrcode read')
  }}
/>
