'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  TextInput,
  View,
} = ReactNative;

var TouchableWithoutFeedback  = require('TouchableWithoutFeedback');
var TouchableHighlight  = require('TouchableHighlight');

class Assistant extends React.Component {

  state = {
    showBorder: true
  };

  _handlePress = () => {

 };


   onSearchPressed() {

   }

  render() {
    return (
    <View style={[styles.container]}>
      <Text style={[styles.headline, styles.paddingBottom]}>Welcome to RBA's Assistant</Text>
      <Text style={styles.paddingBottom}>Your butler, wizard and friend!</Text>

        <TouchableWithoutFeedback onPress={this._handlePress}>
            <View style={styles.bubble}>
              <Text style={styles.link}>
                How does the auction biding work ...
              </Text>
            </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this._handlePress}>
            <View style={styles.bubble}>
              <Text style={styles.link}>
                Show me Dozers, that are selling today ...
              </Text>
            </View>
        </TouchableWithoutFeedback>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Ask me something'/>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text
              style={styles.buttonText}
              onPress={this.onSearchPressed.bind(this)}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationColor: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    lineHeight: 20
  },
  headline: {
    fontSize: 40,
    textAlign: 'center'
  },
  paddingBottom: {
    paddingBottom: 20
  },
  bubble : {
    margin: 20,
    padding: 10,
    borderWidth: 0,
    borderRadius: 5
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 0,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

module.exports = Assistant;
