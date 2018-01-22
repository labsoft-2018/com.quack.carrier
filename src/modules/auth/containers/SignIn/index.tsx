import * as React from 'react'
import SignInForm from '../../components/SignInForm/index'
import { navigateToWaitingMission } from '../../../../navigation'

export default ({
  navigator,
}) => (
  <SignInForm
    onSubmit={() => {
      navigateToWaitingMission(navigator)
    }}
    validate={() => null}
  />
)
