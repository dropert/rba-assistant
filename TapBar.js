'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  NavigatorIOS,
  View,
} = ReactNative;

var SearchPage = require('./SearchPage');
var TestModal = require('./Modal')
var Assisant = require('./Assistant')
var Config = require ('./__config');
var EmptyPage = require ('./EmptyPage');
var Scanner = require ('./Scanner');
var ItemPage = require ('./ItemPage');

class TabBarExample extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'scannerTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        tintColor={Config.colors.lightblue}
        barTintColor={Config.colors.lightgrey}>
        <TabBarIOS.Item
          title="Home"
          style={styles.button}
          icon={require('./Resources/home.png')}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          {this._renderContent('#783E33', 'homeTab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Resources/scan2.png')}
          title="Scanner"
          selected={this.state.selectedTab === 'scannerTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'scannerTab',
              presses: this.state.presses + 1
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: '',
               component: Scanner,
             }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Resources/grid.png')}
          title="Equipment"
          selected={this.state.selectedTab === 'equipmentTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'equipmentTab',
              presses: this.state.presses + 1
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: '',
               component: ItemPage,
             }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Resources/react-bw.png')}
          title="Ritchie Baba"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'assistantTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'assistantTab',
              presses: this.state.presses + 1
            });
          }}>
          <NavigatorIOS
           style={[styles.container]}
           initialRoute={{
             title: 'test',
             component: Assisant,
           }}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
   flex: 1
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  tabButton: {
    color: 'green',
    tintColor: 'red'
  }
});

module.exports = TabBarExample;
