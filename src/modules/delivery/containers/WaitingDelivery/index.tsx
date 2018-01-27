import * as React from 'react'
import WaitingDelivery from '../../components/WaitingDelivery'
import { navigateToAcceptDelivery } from '../../../../navigation/actions'
import BackgroundGeolocation from "react-native-background-geolocation";


export default class extends React.Component {
  public componentWillMount() {
    ////
    // 1.  Wire up event-listeners
    //

    // This handler fires whenever bgGeo receives a location update.
    BackgroundGeolocation.on('location', this.onLocation, this.onError);

    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.on('motionchange', this.onMotionChange);

    // This event fires when a change in motion activity is detected
    BackgroundGeolocation.on('activitychange', this.onActivityChange);

    // This event fires when the user toggles location-services authorization
    BackgroundGeolocation.on('providerchange', this.onProviderChange);

    ////
    // 2.  #configure the plugin (just once for life-time of app)
    //
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
        ////
        // 3. Start tracking!
        //
        BackgroundGeolocation.start(() => {
          console.log('- Start success');
        });
      }
    });
  }
   // You must remove listeners when your component unmounts
  public componentWillUnmount() {
    // Remove BackgroundGeolocation listeners
    BackgroundGeolocation.un('location', this.onLocation);
    BackgroundGeolocation.un('motionchange', this.onMotionChange);
    BackgroundGeolocation.un('activitychange', this.onActivityChange);
    BackgroundGeolocation.un('providerchange', this.onProviderChange);

    // Or just remove them all-at-once
    BackgroundGeolocation.removeListeners();
  }
  public onLocation(location) {
    console.log('- [event] location: ', location);
  }
  public onError(error) {
    console.warn('- [event] location error ', error);
  }
  public onActivityChange(activity) {
    console.log('- [event] activitychange: ', activity);  // eg: 'on_foot', 'still', 'in_vehicle'
  }
  public onProviderChange(provider) {
    console.log('- [event] providerchange: ', provider);
  }
  public onMotionChange(location) {
    console.log('- [event] motionchange: ', location.isMoving, location);
  }

  public render() {
    return (
      <WaitingDelivery
      onDeliveryAvailable={() => {
        navigateToAcceptDelivery(thiis.props.navigator)
      }}
    />
    )
  }
}
