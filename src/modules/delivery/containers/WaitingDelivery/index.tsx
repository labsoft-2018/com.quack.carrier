import * as React from 'react'
import WaitingDelivery from '../../components/WaitingDelivery'
import { navigateToAcceptDelivery } from '../../../../navigation/actions'
import BackgroundGeolocation from 'react-native-background-geolocation';
import SocketIOClient from 'socket.io-client';
import { withSocket } from '../../../socket/hocs/with-socket'

export interface IBackgroundLocation {
  coords: {
    latitude: number;
    longitude: number
  }
}

const ROOM_FIXME = 'room0'

export interface IWaitingDeliveryContainerProps {
  socket: SocketIOClient.Socket
}
class WaitingDeliveryContainer extends React.Component<IWaitingDeliveryContainerProps> {

  private setupGeolocationWatcher = () => {
    // This handler fires whenever bgGeo receives a location update.
    BackgroundGeolocation.on('location', this.onLocation, this.onError);
    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.on('motionchange', this.onMotionChange);
    // This event fires when a change in motion activity is detected
    BackgroundGeolocation.on('activitychange', this.onActivityChange);
    // This event fires when the user toggles location-services authorization
    BackgroundGeolocation.on('providerchange', this.onProviderChange);

    BackgroundGeolocation.configure({
      // Geolocation Config
      desiredAccuracy: 0,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 1,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
    }, (state) => {
      console.log('- BackgroundGeolocation is configured and ready: ', state.enabled);
      if (!state.enabled) {
        BackgroundGeolocation.start(() => {
          console.log('- Start success');
        });
      }
    });
  }

  private killGeolocationWatcher = () => {
    // Or just remove them all-at-once
    BackgroundGeolocation.removeListeners();
  }

  private onLocation = (location: IBackgroundLocation) => {
    this.props.socket.emit('pos', {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  }

  // TODO
  private onError(error) {
    console.warn('- [event] location error ', error);
  }

  // TODO
  private onActivityChange(activity) {
    console.log('- [event] activitychange: ', activity);  // eg: 'on_foot', 'still', 'in_vehicle'
  }

  // TODO
  private onProviderChange(provider) {
    console.log('- [event] providerchange: ', provider);
  }

  // TODO
  private onMotionChange(location) {
    console.log('- [event] motionchange: ', location.isMoving, location);
  }

  public componentWillMount() {
    this.setupGeolocationWatcher()
  }

  // You must remove listeners when your component unmounts
  public componentWillUnmount() {
    this.killGeolocationWatcher()
  }

  public render() {
    return (
      <WaitingDelivery
        onDeliveryAvailable={() => {
          navigateToAcceptDelivery(this.props.navigator)
        }}
      />
    )
  }
}

export default withSocket()(WaitingDeliveryContainer)
