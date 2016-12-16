'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Image,
  Text,
  TextInput,
  View,
} = ReactNative;

var TouchableWithoutFeedback  = require('TouchableWithoutFeedback');
var TouchableHighlight  = require('TouchableHighlight');
var EmptyPage = require ('./EmptyPage');
var Config = require ('./__config');


const avatarImageSize = 40

const avatorMarginRight = 5

class Assistant extends React.Component {

  state = {
    showBorder: true
  };

  _handlePress () {

    this.props.navigator.push({
      title: 'How to bid',
      component: EmptyPage,
      // passProps: {listings: 'rober'}
    });

 };

  render() {

    /*
    <TouchableHighlight style={styles.button}
        underlayColor='#99d9f4'>
      <Text
        style={styles.buttonText}
        onPress={this._handlePress.bind(this)}>
        Go
      </Text>
    </TouchableHighlight>
    */

    return (
    <View style={[styles.container]}>

      <View style={[styles2.flowRight, styles.bubble]}>
        <Image style={[styles2.searchInput], {width: avatarImageSize, height: avatarImageSize}} source={require('./Resources/react-grey.png')} />

          <Text style={[styles.bubbleContent,styles2.button]}>
            Here are some things I can help you with ...
          </Text>

      </View>

      <TouchableWithoutFeedback>
          <View style={styles.bubble}>
            <Text style={[styles.link, styles.bubbleContent, styles.replaceImage]}>
              Show me Dozers, that are selling today ...
            </Text>
          </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this._handlePress.bind(this)}>
          <View style={styles.bubble}>
            <Text style={[styles.link, styles.bubbleContent,  styles.replaceImage]}>
              Show me what to bid on ...
            </Text>
          </View>
      </TouchableWithoutFeedback>

      <View style={styles.flowRight}>
        <TextInput
          style={styles.searchInput}
          placeholder='Ask me something ...'/>
      </View>
    </View>
    );
  }
}

var styles2 = StyleSheet.create({
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
  flex: 1,
  flexDirection: 'row',
  backgroundColor: Config.colors.lightblue,
  borderColor: 'red',
  // borderWidth: 1,
  borderRadius: 8,
  margin: avatorMarginRight,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  padding: 20,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderRadius: 8,
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginTop: 120,
    // alignItems: 'center'
  },
  replaceImage: {
    marginLeft: (avatarImageSize + avatorMarginRight)
  },
  link: {
    color: Config.colors.lightblue,
    textDecorationColor: Config.colors.lightblue,
    textDecorationLine: 'underline',
    // textAlign: 'center',
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
    margin: 10,
    borderRadius: 5,
    maxWidth: 300,
  },
  bubbleContent :  {
    padding: 10,
    backgroundColor: Config.colors.lightgrey,
    borderRadius: 5,
  },
  flowRight: {
    position: 'absolute',
      left: 0,
      right: 0,
      bottom: 65,
      flexDirection:'row',
      height:40,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: Config.colors.lightgrey,
      margin: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'grey',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    flex: 4,
    fontSize: 18,
    borderRadius: 0,
    color: 'grey'
  },
  image: {
    width: 217,
    height: 138
  }
});

module.exports = Assistant;
