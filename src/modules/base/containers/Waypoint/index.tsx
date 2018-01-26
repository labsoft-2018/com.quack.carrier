import * as React from 'react'
import Waypoint from '../../components/Waypoint/index'
import { AsyncStorage } from 'react-native'

// TODO
export interface IWaypointContainerProps {
  allowGuest: boolean;
  onDecideNextScreen: (authenticated: boolean) => void
}

export interface IWaypointContainerState {
  shouldGoToMain: boolean;
  authenticated: boolean;
  loading: boolean;
}

class WaypointContainer extends React.Component<IWaypointContainerProps> {
  public state = {
    authenticated: false,
    loading: true,
    shouldGoToMain: null,
  }

  // private decideNextScreen = (loading, shouldGoToMain, onDecideNextScreen) => {
  //   if (loading || this.state.shouldGoToMain === null) { return }
  //   onDecideNextScreen(shouldGoToMain)
  // }

  // public componentWillReceiveProps(nextProps: IWaypointContainerProps) {
  //   const {
  //     onDecideNextScreen,
  //   } = nextProps
  //   const {
  //     loading,
  //     shouldGoToMain,
  //   } = this.state

  //   this.decideNextScreen(loading, shouldGoToMain, onDecideNextScreen)
  // }

  public async componentDidMount() {
    const token = await AsyncStorage.getItem('token')
    // const shouldGoToMain = await AsyncStorage.getItem('shouldGoToMain') === 'YES'
    const authenticated = !!token

    this.props.onDecideNextScreen(authenticated)
  }

  public render() {
    return (
      <Waypoint
        loading={this.state.loading}
      />
    )
  }
}

export default WaypointContainer
