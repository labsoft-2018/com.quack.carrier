import * as React from 'react'
import { View, Image, StyleSheet, ViewStyle, Text, TextStyle } from 'react-native'
import ScreenWrapper from '../../../common/components/ScreenWrapper'
import WaitingMission from '../../components/WaitingMission'
import MissionDetail from '../../components/MissionDetail'

export default class MissionsScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  render() {
    return (
      <ScreenWrapper>
        <WaitingMission />
      </ScreenWrapper>
      
    )
  }
}

const styles = StyleSheet.create({

})