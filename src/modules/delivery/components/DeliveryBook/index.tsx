import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Colors } from '../../../../resources/colors'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class DeliveryBook extends React.Component {
  public state = {
    index: 0,
    routes: [
      { key: 'map', title: 'Rota' },
      { key: 'products', title: 'Produtos' },
    ],
  };

  private handleIndexChange = (index) => this.setState({ index });

  private renderHeader = (props) => (
    <TabBar
      style={styles.tabBar}
      {...props}
    />
  );

  private renderScene = SceneMap({
    map: () => null,
    products: () => null,
  });

  public render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});
