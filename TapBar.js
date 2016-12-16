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
// import Assisant from './Assistant'
var Assisant = require('./Assistant')

var Config = require ('./__config');

var EmptyPage = require ('./EmptyPage');

class TabBarExample extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'assistantTab',
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
        unselectedTintColor={Config.colors.lightblue}
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
          selected={this.state.selectedTab === 'userTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'userTab',
              presses: this.state.presses + 1
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: 'Property Finder 1235',
               component: SearchPage,
             }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./Resources/scan.png')}
          title="User"
          selected={this.state.selectedTab === 'userTab2'}
          onPress={() => {
            this.setState({
              selectedTab: 'userTab2',
              presses: this.state.presses + 1
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: 'Property Finder 1235',
               component: EmptyPage,
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
