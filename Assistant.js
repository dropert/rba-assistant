'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;


class Assistant extends React.Component {

  render() {
    return (
    <View style={[styles.container]}>
      <Text>Welcome to RBAs Assistant</Text>
      <Text>Your butler, wizard and friend!</Text>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  }
});

module.exports = Assistant;
