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
var ProUser = require ('./ProUser');
var EquipmentDetails = require ('./EquipmentDetails');

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

    /*

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
      <NavigatorIOS
       style={styles.container}
       initialRoute={{
         title: 'EquipmentDetails',
         component: EquipmentDetails,
       }}/>
    </TabBarIOS.Item>

    */
    return (
      <TabBarIOS
        tintColor={Config.colors.lightblue}
        barTintColor={Config.colors.lightgrey}>
        {/*  ------------------------- Equipment ------------------------- */}
        <TabBarIOS.Item
          icon={require('./Resources/grid.png')}
          title="Equipment"
          selected={this.state.selectedTab === 'equipmentTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'equipmentTab'
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: '',
               component: ProUser,
               navigationBarHidden: true
             }}/>
        </TabBarIOS.Item>
        {/*  ------------------------- Assistant ------------------------- */}
        <TabBarIOS.Item
          icon={require('./Resources/bot_nav_avatar2.png')}
          title="Ritchie Baba"
          selected={this.state.selectedTab === 'assistantTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'assistantTab'
            });
          }}>
          <NavigatorIOS
           style={[styles.container]}
           initialRoute={{
             title: 'Ritchie Baba',
             component: Assisant,
           }}/>
        </TabBarIOS.Item>
        {/*  ------------------------- Scanner ------------------------- */}
        <TabBarIOS.Item
          icon={require('./Resources/scan2.png')}
          title="Scanner"
          selected={this.state.selectedTab === 'scannerTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'scannerTab'
            });
          }}>
            <NavigatorIOS
             style={styles.container}
             initialRoute={{
               title: '',
               component: Scanner,
               navigationBarHidden: true
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
